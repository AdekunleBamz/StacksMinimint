# NFTminimint Frontend

> Note: Readme documentation
> Scope: minimal clarity note.


A React-based frontend for the NFTminimint smart contract, built with Vite and the Stacks JS SDK.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommend 22 LTS)
- npm or yarn
- A Stacks-compatible wallet (for example, Leather or Xverse)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## 🔧 Configuration

Update `src/constants/index.js` with the deployment and network values you want to target:

```js
export const CONTRACT_ADDRESS = 'SP...'
export const CONTRACT_NAME = 'minimint-core'
export const NETWORK = 'mainnet' // or 'testnet'
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
│   │   └── ...          # More UI components
│   ├── hooks/           # Custom React hooks
│   │   ├── useStacksWallet.js   # Wallet session connection
│   │   ├── useStacksContract.js # Mint call + contract context
│   │   └── ...               # Utility hooks
│   ├── contract.js      # Contract + network config helpers
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Features

- **Wallet Connection**: Stacks wallet integration via `@stacks/connect`
- **Minting Interface**: Mint NFTs with custom token URIs
- **Collection Stats**: Real-time supply, price, and limit info
- **NFT Gallery**: Grid view of minted NFTs
- **Responsive Design**: Mobile-first dark theme
- **Accessibility Focus**: Keyboard support, live regions, and reduced-motion handling
- **Modal UX Safety**: Escape dismissal, focus restore, and body-scroll locking
- **Toast Notifications**: User feedback system
- **Loading States**: Skeleton loading animations

## 📱 Mobile QA Notes

- Verify mint form states and modal interactions at widths below `640px`.
- Confirm wallet connect/disconnect controls remain reachable without horizontal scrolling.

## ♿ Accessibility QA Notes

- Validate tab order through wallet actions, mint form, and gallery controls.
- Check that status updates are announced for minting, errors, and copy actions.
- Use reduced-motion OS settings to confirm animation fallbacks remain usable.

## 🔗 Hooks

### `useStacksWallet`
Manages wallet session state and account identity.

```jsx
const { address, isConnected, connect, disconnect, isConnecting } = useStacksWallet()
```

### `useStacksContract`
Mint entrypoint + contract state helpers.

```jsx
const { 
  mint,
  contractInfo,
  isLoading,
  error,
  refetch
} = useStacksContract(address)
```

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run check    # Run production build check
```

## 📦 Dependencies

- **React 18** - UI library
- **Vite** - Build tool
- **@stacks/connect** - Wallet connection and auth
- **@stacks/transactions** - Clarity values and post-conditions
- **CSS** - Component styling

## 🔒 Security

- Never commit `.env.local` files
- Validate all user inputs
- Keep contract addresses/network values explicit in `src/contract.js`
- Test on Stacks testnet before mainnet deployment

## 🧭 Troubleshooting

- If wallet prompts do not appear, ensure pop-ups are allowed for `localhost`.
- If transactions open on the wrong chain, confirm `NETWORK` in `src/contract.js`.

## 📄 License

MIT
