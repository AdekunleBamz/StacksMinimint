# Stacks Minimint

A Stacks NFT minimint implementation with SIP-009 compliance.

## Contracts

- `nft-core.clar` - Core NFT implementation with SIP-009 trait
- `nft-metadata.clar` - Metadata storage for NFT attributes
- `nft-mint-controller.clar` - Minting logic and fee management

## Features

- SIP-009 compliant NFT contract
- Configurable minting fees
- Metadata management with batch support
- Collection-level attributes
- Burn functionality for NFTs

## Usage

### Mint NFT
```clarity
(contract-call? .nft-mint-controller mint "ipfs://Qm...")
```

### Get Supply Info
```clarity
(contract-call? .nft-mint-controller get-current-supply)
(contract-call? .nft-mint-controller get-remaining-supply)
```

## Development

This project uses Clarinet for testing and deployment.

```bash
clarinet test
```
