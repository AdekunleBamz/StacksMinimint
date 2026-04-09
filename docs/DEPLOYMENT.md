# Deployment Guide

This guide covers the deployment process for StacksMinimint smart contracts and frontend.

## Prerequisites

- Clarinet installed and configured
- Hiro account for mainnet deployment
- Sufficient STX for deployment fees
- Contract owner wallet configured

## Pre-Deployment Checklist

### 1. Contract Verification

```bash
# Run all contract checks
npm run check

# Run contract tests
npm test

# Check contract costs
clarinet cost-analysis
```

### 2. Environment Setup

```bash
# Copy and configure environment
cp .env.example .env

# Set network to target
# VITE_STX_NETWORK=mainnet or testnet

# Update contract addresses if needed
# VITE_CONTRACT_ADDRESS=your-deployer-address
```

### 3. Network Selection

| Network | Use Case | STX Cost |
|---------|----------|----------|
| Simnet | Local testing | 0 STX |
| Testnet | Testing before mainnet | Low STX |
| Mainnet | Production deployment | Full STX |

## Deployment Steps

### Step 1: Deploy to Testnet (Recommended)

1. **Prepare deployment plan:**
   ```bash
   clarinet deployments generate
   ```

2. **Review deployment plan:**
   - Check `deployments/devnet-plan.yaml`
   - Verify contract order and dependencies

3. **Execute deployment:**
   ```bash
   clarinet deployments apply --network testnet
   ```

4. **Verify deployment:**
   - Check transactions on [Stacks Explorer](https://explorer.stacks.co/)
   - Test contract interactions

### Step 2: Deploy to Mainnet

> **Warning**: Mainnet deployments are irreversible. Ensure thorough testing on testnet first.

1. **Update deployment plan for mainnet:**
   ```bash
   clarinet deployments generate --network mainnet
   ```

2. **Fund deployer wallet:**
   - Ensure sufficient STX for deployment costs
   - Typical cost: 5-15 STX depending on contract complexity

3. **Execute mainnet deployment:**
   ```bash
   clarinet deployments apply --network mainnet
   ```

4. **Wait for confirmation:**
   - Monitor deployment progress
   - Verify all contracts deployed successfully

## Post-Deployment Verification

### 1. Contract Verification

```bash
# Verify contract on Hiro
# Visit: https://explorer.stacks.co/contracts

# Check contract state
clarinet console --network mainnet
```

### 2. Frontend Configuration

Update frontend environment variables:

```bash
# .env.production or Vercel environment
VITE_CONTRACT_ADDRESS=SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT
VITE_CONTRACT_NAME=minimint-core-v-i27
VITE_HUB_CONTRACT_ADDRESS=SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT
VITE_HUB_CONTRACT_NAME=minimint-hub-v-i27
VITE_STX_NETWORK=mainnet
```

### 3. Smoke Tests

Perform these manual checks:

- [ ] Connect wallet to frontend
- [ ] View contract data (total supply, mint price)
- [ ] Attempt a test mint (if not sold out)
- [ ] Verify NFT appears in wallet
- [ ] Check transaction on explorer

## Rollback Procedures

If issues are detected post-deployment:

### 1. Pause Contracts

If a pause function exists:
```bash
# Call pause function via clarinet
clarinet console --network mainnet
```

### 2. Frontend Rollback

```bash
# Revert to previous version
git revert <deployment-commit>
npm run frontend:build
npm run frontend:preview
```

### 3. Emergency Contacts

- Hiro Support: [support@hiro.so](mailto:support@hiro.so)
- Stacks Discord: [discord.gg/stacks](https://discord.gg/stacks)

## Deployment Costs Reference

| Operation | Estimated Cost (STX) |
|-----------|---------------------|
| Core Contract | 2-5 STX |
| Hub Contract | 3-7 STX |
| Token Contract | 2-4 STX |
| Trait Contracts | 1-2 STX each |

> **Note**: Costs vary based on network congestion and contract complexity.

## Best Practices

1. **Always deploy to testnet first**
2. **Keep deployment plans versioned in git**
3. **Document all deployed contract addresses**
4. **Monitor deployments for 24 hours post-launch**
5. **Have a rollback plan ready**
6. **Communicate deployment schedule to stakeholders**

## Troubleshooting

### Deployment Fails

- Check deployer wallet balance
- Verify network connectivity
- Review contract for compilation errors
- Check Clarinet version compatibility

### Contract Not Found

- Verify deployment completed successfully
- Check correct network (mainnet vs testnet)
- Confirm contract address and name

### Frontend Not Connecting

- Verify environment variables are set
- Check contract addresses match deployment
- Clear browser cache and retry
