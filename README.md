# NFTminimint (Stacks Edition)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Clarity](https://img.shields.io/badge/Clarity-v2.0-blue.svg)](https://clarity-lang.org/)
[![Stacks](https://img.shields.io/badge/Built%20with-Stacks-purple.svg)](https://stacks.co/)
[![Hiro](https://img.shields.io/badge/Tools-Clarinet-orange.svg)](https://hiro.so/)

A modular NFT minting platform built exclusively for the Stacks blockchain.

## 🚀 Features

- **Stacks Mainnet**: Fully compatible with the Stacks blockchain and Nakamoto fast blocks.
- **Modular Clarity Architecture**: Highly optimized smart contracts.
- **Low Minting Fee**: Fixed 0.02 STX deployment and interaction bounds.
- **SIP-009 Standard**: Fully compliant with Stacks NFT standards.
- **SIP-010 Standard**: Built-in reward tokenomics for staking.
- **@stacks/connect**: Seamless wallet integration (Leather, Xverse, OKX).
- **@stacks/transactions**: Secure on-chain interactions and real-time state polling.

## 📦 Contract Architecture

| Contract | Purpose |
|----------|---------|
| `minimint-core-v-i27` | Base SIP-009 implementation and mint controller |
| `minimint-token-v-i27` | SIP-010 token for holder rewards |
| `minimint-hub-v-i27` | Escrow hub for staking and marketplace listings |

## 🌐 Stacks Integration

This project uses modern Stacks development tools:

- **@stacks/connect**: For connecting to Stacks wallets and broadcasting transactions.
- **@stacks/transactions**: For Clarity value conversion (`cvToJSON`) and `callReadOnlyFunction` polling.
- **Clarinet**: For local development, testing, and contract deployment.

## Installation

```bash
# Install dependencies
npm install

# Start local frontend
npm run dev
```

## Quick Start

1. Compile contracts:
```bash
clarinet check
```

2. Run Clarinet console:
```bash
clarinet console
```

## Frontend

The UI includes a live minting dashboard, real-time supply polling, a unified gallery, and collection statistics. It connects securely natively to the Stacks network.

## Contract Details

- **Blockchain**: Stacks 
- **Language**: Clarity
- **Standards**: SIP-009 (NFT) & SIP-010 (Fungible Token)
- **Features**: Minting, Staking Escrow, and Automated Rewards.

## 🤝 Contributing

We welcome contributions to the NFTminimint project! Here's how you can help:

### Ways to Contribute

- **Smart Contracts**: Enhance contracts with new features, improve execution pathways.
- **Testing**: Add comprehensive testing with Clarinet.
- **Documentation**: Improve docs, add tutorials.
- **Frontend**: Polish user experience using React and Vite.

### Development Guidelines

#### Smart Contracts (Clarity)
- Utilize functional programming concepts natively in Clarity.
- Ensure strict zero-balance and post-condition checks.
- Keep data representation concise.

#### Frontend
- Ensure all calls use `@stacks/connect` and `@stacks/transactions`.
- Gracefully handle pending states during block confirmations.

### Code Standards

- **Clarity**: Write readable, predictable, and fail-safe logic.
- **JavaScript/React**: Use ESLint with configured rules.

---

## 📄 License

MIT

---

Built with ❤️ for the NFT community on the Stacks blockchain.
