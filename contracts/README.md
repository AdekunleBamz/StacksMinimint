# StacksMinimint Contracts

Clarity smart contracts for the StacksMinimint NFT minting platform.

## Contract Overview

- **minimint-core-v-i27.clar** - Core NFT minting functionality
- **minimint-hub-v-i27.clar** - Hub contract for coordinating mints

## Development

```bash
# Install Clarinet
npm install -g @hirosystems/clarinet

# Run tests
clarinet test

# Start local devnet
clarinet devnet start
```

## Contract Architecture

The contracts implement SIP-009 (Non-Fungible Token Standard) with:

- Lightweight metadata storage
- Gas-efficient minting
- Clear ownership tracking

## Deployment

Contracts are deployed to Stacks mainnet at:
- Deployer: `SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT`

## License

MIT
