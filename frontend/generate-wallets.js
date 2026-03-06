import pkg from '@stacks/transactions';
const { getAddressFromPrivateKey, AddressVersion } = pkg;
import crypto from 'crypto';
import fs from 'fs';

async function generateWallets() {
  const wallets = [];
  console.log('--- Generating 25 Test Wallets ---');

  for (let i = 1; i <= 25; i++) {
    const privateKey = crypto.randomBytes(32).toString('hex');
    const address = getAddressFromPrivateKey(privateKey, AddressVersion.MainnetSingleSig);
    
    wallets.push({
      id: `w${i}`,
      privateKey: privateKey,
      address: address
    });
    
    console.log(`w${i}: ${address}`);
  }

  fs.writeFileSync('test-wallets.json', JSON.stringify(wallets, null, 2));
  console.log('\n✅ 25 wallets saved to test-wallets.json');
}

generateWallets().catch(console.error);
