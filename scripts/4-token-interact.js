const { makeContractCall, broadcastTransaction, PostConditionMode, makeStandardSTXPostCondition, FungibleConditionCode, uintCV, principalCV, someCV, noneCV, bufferCVFromString, contractPrincipalCV, stringAsciiCV } = require('@stacks/transactions');
const { STACKS_MAINNET } = require('@stacks/network');
const fs = require('fs');
const fetch = require('cross-fetch');

const NETWORK = STACKS_MAINNET;
const BURN_ADDRESS = 'SP000000000000000000002Q6VF78';
const DEPLOYER = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT';
const CORE = 'minimint-core-v-i27';
const TOKEN = 'minimint-token-v-i27';
const HUB = 'minimint-hub-v-i27';

// Organic gas: 0.0011 - 0.0014 STX
const MIN_GAS = 1100;
const MAX_GAS = 1400;

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function broadcastAndWait(txOptions, actionName) {
    let res = null;
    let rateLimited = true;

    while (rateLimited) {
        txOptions.fee = Math.floor(Math.random() * (MAX_GAS - MIN_GAS + 1)) + MIN_GAS;

        try {
            const transaction = await makeContractCall(txOptions);
            res = await broadcastTransaction({ transaction, network: NETWORK });

            if (res.error) {
                if (res.error === 'NotEnoughFunds' || res.reason === 'NotEnoughFunds') {
                    console.error(`[CRITICAL] Wallet out of STX (Reason: ${res.reason || res.error}). Skipping to next wallet.`);
                    return null;
                }
                console.error(`[TX Broadcast Failed] ${actionName}:`, res.error, res.reason ? `(${res.reason})` : '');
                console.log(`[RETRY] Waiting 10 seconds before retrying...`);
                await sleep(10000);
                continue;
            }

            rateLimited = false;
        } catch (err) {
            if (err.message.includes('Per-minute') || err.message.includes('JSON') || err.message.includes('Failed to broadcast transaction')) {
                console.log(`[RATE LIMIT HIT] Hiro API limit reached. Cooling down for 60 seconds...`);
                await sleep(60000);
            } else {
                console.error(`[Fatal Broadcast Error] ${actionName}:`, err);
                return null;
            }
        }
    }

    const txid = typeof res === 'string' ? res : res.txid;
    console.log(`[Sent] ${actionName} | TXID: ${txid}`);

    while (true) {
        try {
            const pollRes = await fetch(`https://api.mainnet.hiro.so/extended/v1/tx/${txid}`);
            if (pollRes.status === 200) {
                const data = await pollRes.json();
                if (data.tx_status === 'success') {
                    console.log(`[✅ Confirmed] ${actionName} finalized on-chain!`);
                    return data;
                } else if (data.tx_status === 'pending') {
                    console.log(`[Pending] ${actionName} in mempool... checking again in 5s`);
                } else {
                    console.error(`[Error ✗] ${actionName} failed with: ${data.tx_status}`);
                    return null;
                }
            }
        } catch (e) { }
        await sleep(5000);
    }
}

async function getWalletBalance(address) {
    try {
        const res = await fetch(`https://api.mainnet.hiro.so/extended/v1/address/${address}/stx`);
        if (res.status === 200) {
            const data = await res.json();
            return parseInt(data.balance, 10);
        }
    } catch (e) { }
    return 0;
}

async function main() {
    const wallets = JSON.parse(fs.readFileSync(__dirname + '/wallets.json', 'utf-8'));
    const distributor = wallets[0];
    const targets = wallets.slice(1);

    console.log(`Initiating Token Claim & Transfer Sequence for 50 Wallets...`);
    console.log(`NOTE: This script will fail if you run it immediately after staking.`);
    console.log(`      You MUST wait at least 10-20 minutes (1 Bitcoin Block) after staking`);
    console.log(`      so the network actually has time to mint MMT rewards to the wallets!\n`);

    for (let i = 0; i < targets.length; i++) {
        const target = targets[i];
        console.log(`\n================================`);
        console.log(`Processing Wallet [${i + 1}/50]: ${target.id} (${target.address})`);

        // Need at least ~0.003 STX gas for 3 txs
        const balance = await getWalletBalance(target.address);
        if (balance < 3000) {
            console.log(`[SKIPPING] Insufficient STX (${balance / 1000000}). Wallet requires funding.`);
            continue;
        }

        // ----------------------------------------------------
        // Interaction 1: Hub -> Claim Rewards
        // ----------------------------------------------------
        const claimOpts = {
            contractAddress: DEPLOYER, contractName: HUB, functionName: 'claim-rewards', functionArgs: [],
            senderKey: target.privateKey, network: NETWORK, postConditionMode: PostConditionMode.Allow, anchorMode: 'any'
        };
        const res1 = await broadcastAndWait(claimOpts, 'Hub: Claim MMT Rewards');
        if (!res1) {
            console.log(`[ABORT] Skipping wallet. Likely 0 MMT earned or insufficient funds.`);
            continue;
        }

        // ----------------------------------------------------
        // Interaction 2: Token -> Transfer 1 uMMT
        // ----------------------------------------------------
        const transfer1Opts = {
            contractAddress: DEPLOYER, contractName: TOKEN, functionName: 'transfer',
            functionArgs: [uintCV(1), principalCV(target.address), principalCV(distributor.address), noneCV()],
            senderKey: target.privateKey, network: NETWORK, postConditionMode: PostConditionMode.Allow, anchorMode: 'any'
        };
        const res2 = await broadcastAndWait(transfer1Opts, 'Token: Transfer 1 uMMT');
        if (!res2) continue;

        // ----------------------------------------------------
        // Interaction 3: Token -> Transfer 1 uMMT
        // ----------------------------------------------------
        const transfer2Opts = { ...transfer1Opts };
        const res3 = await broadcastAndWait(transfer2Opts, 'Token: Transfer 1 uMMT');
        if (!res3) continue;

        console.log(`[✅] Completed Token Claim + 2 Transfers for ${target.id}`);
    }

    console.log('\n================================');
    console.log('✅ ALL MMT CLAIM & TRANSFER INTERACTIONS FULLY COMPLETED ORGANICALLY!');
}

main().catch(console.error);
