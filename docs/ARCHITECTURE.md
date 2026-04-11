# StacksMinimint Architecture

This document provides an overview of the StacksMinimint system architecture.

## System Overview

StacksMinimint is a full-stack NFT minting platform built on the Stacks blockchain. It consists of three main layers:

### 1. Smart Contract Layer

The foundation consists of Clarity smart contracts deployed on Stacks:

- **minimint-core-v-i27**: Core NFT minting contract (SIP-009 compliant)
- **minimint-hub-v-i27**: Hub contract for staking, marketplace, and SIP-010 token logic

### 2. Frontend Layer

A React-based single-page application providing the user interface:

```
frontend/src/
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks for blockchain interaction
├── utils/          # Utility functions for formatting and validation
├── constants/      # Application configuration
├── context/        # React context providers
└── App.jsx         # Main application component
```

### 3. Automation Layer

Optional Node.js scripts for contract interaction and automation:

```
scripts/
├── README.md              # Script usage and expected commands
└── (optional package)     # Wallet generation and interaction helpers
```

## Data Flow

### Minting Flow

1. User connects wallet via `useStacksWallet` hook
2. User enters metadata URI in `MintCard` component
3. URI is validated using `validateTokenURI` utility
4. `useStacksContract.mint()` opens wallet prompt
5. Transaction is submitted to Stacks blockchain
6. Contract state updates and UI reflects new mint

### Contract Interaction

```
User Action → React Component → Custom Hook → @stacks/connect → Stacks Blockchain
```

## Key Design Patterns

### Wallet-First Architecture

The application requires wallet connection before minting, ensuring:
- Clear user intent
- Proper transaction signing
- Accurate balance and allowance checks

### Modular Components

Each component has a single responsibility:
- `MintCard`: Minting interface and validation
- `Stats`: Collection metrics display
- `Gallery`: NFT browsing and details
- `RecentMints`: Activity feed

### Progressive Enhancement

The UI works without JavaScript for basic viewing, with enhanced interactivity when available.

## Security Considerations

- All external links use `rel="noopener noreferrer"`
- Post-conditions enforce correct STX amounts
- Input validation prevents malicious URIs
- Error boundaries catch and handle failures gracefully

## Performance Optimizations

- Lazy loading of images with `loading="lazy"`
- Memoization of expensive calculations
- Passive event listeners for scroll handling
- Efficient re-render prevention with proper key usage

## Testing Strategy

- Unit tests for utility functions
- Component tests for UI behavior
- Contract tests using Clarinet
- End-to-end testing recommended for critical flows
