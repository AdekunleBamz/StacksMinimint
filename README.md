# 🪙 StacksMinimint

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Clarity](https://img.shields.io/badge/Clarity-v2.0-blue.svg)](https://clarity-lang.org/)
[![Stacks](https://img.shields.io/badge/Built%20with-Stacks-purple.svg)](https://stacks.co/)
[![Hiro](https://img.shields.io/badge/Tools-Clarinet-orange.svg)](https://hiro.so/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

**StacksMinimint** is a high-performance, modular NFT minting and rewards ecosystem built for the Stacks blockchain. Leveraging Clarity smart contracts and Nakamoto-era capabilities, it provides a seamless experience for both collectors and developers.

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Development Setup](#-development-setup)
- [Getting Started](#-getting-started)
- [Contract Details](#-contract-details)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Key Features

- **🚀 Nakamoto Ready**: Fully compatible with the latest Stacks blockchain updates and fast block confirmations.
- **🏗️ Modular Architecture**: Highly optimized smart contracts separated by concern (Core + Hub).
- **💸 Low-Friction Minting**: Optimized execution costs and user-friendly post-conditions.
- **💎 SIP-009 Standard**: Fully compliant Non-Fungible Token implementation.
- **💰 SIP-010 Integration**: Native reward tokenomics with built-in staking capabilities.
- **🔌 Universal Wallet Support**: Smooth integration with Leather, Xverse, and OKX via `@stacks/connect`.

---

## 📐 System Architecture

Stored in the `contracts/` directory, the ecosystem consists of three actively maintained contracts:

| Contract | Purpose | Standard |
|----------|---------|----------|
| `minimint-core-v-i27` | Base implementation, mint controller, and metadata management | SIP-009 |
| `minimint-token-v-i27` | Reward token contract used by staking and payout flows | SIP-010 |
| `minimint-hub-v-i27` | Central escrow for staking + marketplace, and consolidated SIP-010 reward token logic | SIP-010 + Custom |

The legacy SIP-010 function surface (`transfer`, `mint`, `get-balance`, `get-total-supply`, `set-token-uri`, and related read-onlys) is preserved on `minimint-hub-v-i27`.

> [!NOTE]
> The frontend targets the tracked `minimint-core-v-i27` and `minimint-hub-v-i27` contracts by default. Use environment overrides for contract names and addresses when you need to point the app at a different deployment.

---

## 🛠️ Development Setup

### Prerequisites

| Tool | Version | Purpose | Installation |
|------|---------|---------|--------------|
| Node.js | v18+ | JavaScript runtime (includes npm) | [Download](https://nodejs.org/en/download) |
| Clarinet | v3.x+ | Smart contract development | [Install Guide](https://docs.hiro.so/clarinet/get-started) |
| Git | Latest | Version control | [Download](https://git-scm.com/downloads) |
| Stacks Wallet | Latest | Wallet interaction | [Leather](https://leather.io/download) or [Xverse](https://www.xverse.app/download) |

### Installation

1. **Clone and Install Root Dependencies:**
   ```bash
   git clone https://github.com/AdekunleBamz/StacksMinimint.git
   cd StacksMinimint
   npm ci
   ```
   > **Note**: Uses `npm ci` for reproducible, clean installs.

2. **Frontend Setup:**
   ```bash
   npm run frontend:install
   ```
   > **Note**: Installs dependencies in the `frontend/` directory.

3. **Automation Scripts Setup (Optional):**
   ```bash
   npm run scripts:install
   ```
   > **Note**: This command expects a `scripts/package.json`. If your checkout does not include the automation package yet, skip this step because it is not required for contracts or frontend development.

4. **Frontend Environment Configuration:**
   ```bash
   cp frontend/.env.example frontend/.env
   ```
   Edit `frontend/.env` to configure the network (mainnet/testnet), core contract address, hub contract address, and optional mint fee override.
   See [Environment Variables](#-environment-variables) for available options.

---

## 🚀 Getting Started

### Smart Contract Development

Check contract integrity:
```bash
npm run contracts:check
```

Run interactive console:
```bash
npm run contracts:console
```

Execute contract tests:
```bash
npm run test
```

Run the root validation flow (contracts + tests):
```bash
npm run check
```

Run a faster pre-push validation flow:
```bash
npm run check:fast
```

Run the full local verification flow:
```bash
npm run verify:local
```

### Frontend Development

Copy the frontend environment example before starting the UI locally:
```bash
cp frontend/.env.example frontend/.env
```

Start the local development server:
```bash
npm run frontend:dev
```

Build for production:
```bash
npm run frontend:build
```

Run frontend unit tests:
```bash
npm run frontend:test
```
This command runs `npm run test` inside `frontend/` from the repo root.

Run frontend smoke tests for quick rendering checks and wallet prompt verification:
```bash
npm run frontend:smoke
```

Run frontend static checks:
```bash
npm run frontend:check
```

Run the production verification shortcut before release handoff:
```bash
npm run verify:production
```

---

## 📜 Contract Details

| Aspect | Details |
|--------|---------|
| **Blockchain** | Stacks (Layer 2 for Bitcoin) |
| **Language** | Clarity v2.0 (Decidable, interpreted) |
| **Epoch** | 2.4+ |
| **NFT Standard** | SIP-009 compliant |
| **Token Standard** | SIP-010 compliant |
| **Security** | Post-condition enforcement, access control |

### Error Codes

| Code | Meaning |
|------|---------|
| u100 | Not authorized |
| u101 | Not the owner |
| u102 | Sold out / Not staked |
| u103 | Paused / Listing not found |
| u104 | Wrong maker |
| u105 | Invalid price |
| u106 | Wrong contract |

---

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_STX_NETWORK` | Network (mainnet/testnet) | `mainnet` |
| `VITE_CONTRACT_ADDRESS` | Core contract address | Mainnet deployer |
| `VITE_CONTRACT_NAME` | Core contract name | `minimint-core-v-i27` |
| `VITE_HUB_CONTRACT_ADDRESS` | Hub contract address | Mainnet deployer |
| `VITE_HUB_CONTRACT_NAME` | Hub contract name | `minimint-hub-v-i27` |
| `VITE_MINT_FEE` | Mint fee in micro-STX | `1000` |

---

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on our workflow and code standards.

### Focus Areas
- **Optimization**: Reducing gas costs in Clarity functions.
- **UX**: Enhancing the dashboard with clearer real-time data visualization.
- **Testing**: Expanding the Vitest and Clarinet test suites, especially for wallet and explorer edge cases.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

Built for the Bitcoin ecosystem on Stacks, with a focus on predictable mint and staking flows.
