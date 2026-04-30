# StacksMinimint Frontend

A Vite-powered React frontend for the StacksMinimint NFT minting platform.

## Quick Start

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

From the repository root, use `npm run frontend:test` for the same test command.

## Project Structure

```
frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── hooks/       # Custom React hooks
│   ├── utils/       # Utility functions
│   ├── constants/   # Application constants
│   └── assets/      # Images and other assets
└── index.html       # Entry HTML file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run check` - Build verification for frontend integrity

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `VITE_STX_NETWORK` - Network (mainnet/testnet)
- `VITE_CONTRACT_ADDRESS` - Contract address
- `VITE_CONTRACT_NAME` - Contract name
- `VITE_HUB_CONTRACT_ADDRESS` - Hub contract address
- `VITE_HUB_CONTRACT_NAME` - Hub contract name
- `VITE_TOKEN_SYMBOL` - Reward token display symbol

## License

MIT
