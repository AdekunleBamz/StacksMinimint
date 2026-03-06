# NFTminimint Frontend

A React-based frontend for the NFTminimint smart contract, built with Vite and ethers.js.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommend 22 LTS)
- npm or yarn
- MetaMask browser extension

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

## 🔧 Configuration

Create a `.env.local` file with your contract address:

```env
VITE_CONTRACT_ADDRESS=0x5FbDB2315678afecb367f032d93F642f64180aa3
```

For multiple networks, set network-specific addresses:

```env
VITE_SEPOLIA_CONTRACT_ADDRESS=0x...
VITE_MAINNET_CONTRACT_ADDRESS=0x...
```

## 📁 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx   # Navigation & wallet connect
│   │   ├── MintCard.jsx # Minting interface
│   │   ├── Stats.jsx    # Collection statistics
│   │   ├── Gallery.jsx  # NFT gallery grid
│   │   ├── Features.jsx # Platform features
│   │   └── ...          # More UI components
│   ├── hooks/           # Custom React hooks
│   │   ├── useWallet.js      # Wallet connection
│   │   ├── useContract.js    # Basic contract interaction
│   │   ├── useNFTContract.js # Full NFT contract interface
│   │   └── ...               # Utility hooks
│   ├── contract.js      # ABI & network config
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Features

- **Wallet Connection**: MetaMask integration with chain switching
- **Minting Interface**: Mint NFTs with custom token URIs
- **Collection Stats**: Real-time supply, price, and limit info
- **NFT Gallery**: Grid view of minted NFTs
- **Responsive Design**: Mobile-first dark theme
- **Toast Notifications**: User feedback system
- **Loading States**: Skeleton loading animations

## 🔗 Hooks

### `useWallet`
Manages wallet connection state.

```jsx
const { account, chainId, connect, disconnect, isConnecting } = useWallet()
```

### `useNFTContract`
Full NFT contract interface.

```jsx
const { 
  totalSupply, 
  maxSupply, 
  mintFee,
  canMint,
  mint,
  refetch 
} = useNFTContract(account)
```

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📦 Dependencies

- **React 18** - UI library
- **Vite** - Build tool
- **ethers.js** - Ethereum library
- **CSS Modules** - Component styling

## 🔒 Security

- Never commit `.env.local` files
- Validate all user inputs
- Use environment variables for sensitive data
- Test on testnets before mainnet deployment

## 📄 License

MIT
