# StacksMinimint Contracts

Clarity smart contracts for the StacksMinimint NFT minting and rewards platform on Stacks.

## 📋 Contract Overview

| Contract | Purpose | Standard | Status |
|----------|---------|----------|--------|
| `minimint-core-v-i27.clar` | Core NFT minting, metadata, and ownership | SIP-009 | ✅ Active |
| `minimint-hub-v-i27.clar` | Staking, marketplace, and reward distribution | SIP-010 + Custom | ✅ Active |
| `minimint-token-v-i27.clar` | Reward token (MMT) implementation | SIP-010 | ✅ Active |

### Archive Contracts

| Contract | Purpose | Status |
|----------|---------|--------|
| `sip-009-nft-trait-v-i27.clar` | NFT trait definition | 📦 Reference |
| `sip-010-trait-ft-standard-v-i27.clar` | FT trait definition | 📦 Reference |

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend (React)                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     minimint-hub-v-i27                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │  Marketplace │  │   Staking   │  │   Reward Distribution   │ │
│  │  (list/buy)  │  │ (stake/unstake)│  │   (claim-rewards)       │ │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ minimint-core   │ │ minimint-token  │ │  SIP Traits     │
│ (NFT minting)   │ │ (reward token)  │ │ (type checking) │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

## 🛠️ Development

### Prerequisites

- [Clarinet](https://docs.hiro.so/clarinet/get-started) v3.x+
- Node.js v18+

### Quick Start

```bash
# Install Clarinet (if not installed)
npm install -g @hirosystems/clarinet

# Check contract integrity
clarinet check

# Run tests
npm test

# Start local devnet for testing
clarinet devnet start

# Open interactive console
clarinet console
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- contracts/minimint-core.test.ts
```

## 📊 Contract Details

### minimint-core-v-i27

**Key Functions:**
- `mint(uri)` - Mint a new NFT with metadata URI
- `transfer(token-id, sender, recipient)` - Transfer NFT ownership
- `burn(token-id)` - Burn an NFT
- `get-last-token-id()` - Get the highest minted token ID
- `get-token-uri(token-id)` - Get metadata URI for a token
- `get-owner(token-id)` - Get current owner of a token

**Constants:**
- `MAX-SUPPLY`: 10,000 NFTs
- `MINT-FEE`: 0.001 STX per mint

### minimint-hub-v-i27

**Key Functions:**
- `list-item(nft, token-id, price)` - List NFT for sale
- `buy-item(nft, token-id)` - Purchase an NFT
- `stake(nft-contract, token-id)` - Stake an NFT to earn rewards
- `unstake(nft-contract, token-id)` - Unstake an NFT
- `claim-rewards()` - Claim accumulated staking rewards

**Constants:**
- `REWARD-PER-BLOCK`: 1.0 MMT tokens per block per staked NFT

## 🚀 Deployment

### Deployment Order

1. SIP Trait Contracts (reference only)
2. `minimint-core-v-i27`
3. `minimint-token-v-i27`
4. `minimint-hub-v-i27` (depends on core and token)

### Mainnet Addresses

| Contract | Address |
|----------|---------|
| Core | `SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.minimint-core-v-i27` |
| Hub | `SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.minimint-hub-v-i27` |
| Token | `SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.minimint-token-v-i27` |

## 🔒 Security

- All contracts use standardized error codes (u100-u106)
- Access control enforced via owner checks
- NFT transfers validated against core contract
- Reentrancy protected by Clarity's synchronous execution

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details.
