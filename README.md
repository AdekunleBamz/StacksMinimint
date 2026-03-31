# 🪙 StacksMinimint

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Clarity](https://img.shields.io/badge/Clarity-v2.0-blue.svg)](https://clarity-lang.org/)
[![Stacks](https://img.shields.io/badge/Built%20with-Stacks-purple.svg)](https://stacks.co/)
[![Hiro](https://img.shields.io/badge/Tools-Clarinet-orange.svg)](https://hiro.so/)

**StacksMinimint** is a high-performance, modular NFT minting and rewards ecosystem built specifically for the Stacks blockchain. Leveraging Clarity smart contracts and the Nakamoto release capabilities, it provides a seamless experience for both collectors and developers.

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Development Setup](#-development-setup)
- [Getting Started](#-getting-started)
- [Contract Details](#-contract-details)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Key Features

- **🚀 Nakamoto Ready**: Fully compatible with the latest Stacks blockchain updates and fast block confirmations.
- **🏗️ Modular Architecture**: Highly optimized smart contracts separated by concern (Core + Hub).
- **💸 Low-Friction Minting**: Optimized execution costs and user-friendly post-conditions.
- **💎 SIP-009 Standard**: Fully compliant Non-Fungible Token implementation.
- **💰 SIP-010 Integration**: Native reward tokenomics with built-in staking capabilities.
- **🔌 Universal Wallet Support**: Seamless integration with Leather, Xverse, and OKX via `@stacks/connect`.

---

## 📐 System Architecture

Stored in the `contracts/` directory, the ecosystem consists of two active components:

| Contract | Purpose | Standard |
|----------|---------|----------|
| `minimint-core-v-i27` | Base implementation, mint controller, and metadata management | SIP-009 |
| `minimint-hub-v-i27` | Central escrow for staking + marketplace, and consolidated SIP-010 reward token logic | SIP-010 + Custom |

The legacy SIP-010 function surface (`transfer`, `mint`, `get-balance`, `get-total-supply`, `set-token-uri`, and related read-onlys) is preserved on `minimint-hub-v-i27`.

> [!NOTE]
> The frontend is configured to target the `minimint-core` deployment by default. Update `frontend/src/constants/index.js` if you are pointing at a versioned Clarinet contract such as `minimint-core-v-i27`.

---

## 🛠️ Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Clarinet](https://github.com/hirosystems/clarinet) for smart contract development
- A Stacks Wallet (Leather or Xverse)

### Installation

1. **Clone and Install Root Dependencies:**
   ```bash
   git clone https://github.com/AdekunleBamz/StacksMinimint.git
   cd StacksMinimint
   npm ci
   ```

2. **Frontend Setup:**
   ```bash
   npm run frontend:install
   ```

3. **Automation Scripts Setup:**
   ```bash
   npm run scripts:install
   ```

---

## 🚀 Getting Started

### Smart Contract Development

Check contract integrity:
```bash
clarinet check
```

Run interactive console:
```bash
npm run contracts:console
```

Execute contract tests:
```bash
npm test
```

Run the root validation flow (contracts + tests):
```bash
npm run check
```

### Frontend Development

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

Run frontend static checks:
```bash
npm run frontend:check
```

---

## 📜 Contract Details

- **Blockchain**: Stacks (Layer 2 for Bitcoin)
- **Language**: Clarity (Decidable, interpreted language)
- **Security**: Strict post-condition enforcement and zero-balance checks.

---

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on our workflow and code standards.

### Focus Areas
- **Optimization**: Reducing gas costs in Clarity functions.
- **UX**: Enhancing the dashboard with better real-time data visualization.
- **Testing**: Expanding the Vitest and Clarinet test suites.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

Built with ❤️ for the Bitcoin ecosystem on Stacks.
