# StacksMinimint Glossary

This document defines key terms and concepts used throughout the StacksMinimint project.

## Blockchain & Stacks Terms

- **Stacks (STX)**: The native cryptocurrency of the Stacks blockchain, used for transaction fees and smart contract execution.
- **Clarity**: A decidable, interpreted smart contract language designed for the Stacks blockchain. It prioritizes security and predictability.
- **SIP-009**: Stacks Improvement Proposal 009 - the standard for Non-Fungible Tokens (NFTs) on Stacks.
- **SIP-010**: Stacks Improvement Proposal 010 - the standard for Fungible Tokens on Stacks.
- **Nakamoto Release**: A major upgrade to the Stacks blockchain that introduces faster block times and improved finality.
- **Post-condition**: A mechanism in Stacks transactions that allows users to specify conditions that must be met for the transaction to succeed.
- **Micro-STX**: The smallest unit of STX token (1 STX = 1,000,000 micro-STX).

## Project-Specific Terms

- **Minimint Core**: The primary smart contract (`minimint-core-v-i27`) that handles NFT minting and metadata management.
- **Minimint Hub**: The secondary contract (`minimint-hub-v-i27`) that manages staking, marketplace functionality, and SIP-010 reward token logic.
- **Token URI**: A Uniform Resource Identifier pointing to the metadata JSON file for an NFT.
- **Mint Fee**: The amount of STX required to mint a single NFT from the collection.
- **Wallet Minted**: The number of NFTs already minted by a specific wallet address.
- **Max Per Wallet**: The maximum number of NFTs that a single wallet can mint from the collection.

## Frontend Terms

- **Wallet-first flow**: A design pattern where users connect their wallet before interacting with the minting interface.
- **Gallery**: The section of the frontend that displays minted NFTs from the collection.
- **Recent Mints**: A component showing the latest minting activity.
- **Stats**: A dashboard displaying collection metrics like total supply, remaining items, and mint price.
- **Toast**: A notification component that provides feedback on user actions.

## Development Terms

- **Clarinet**: A development tool by Hiro Systems for testing and deploying Clarity smart contracts.
- **Simnet**: A local simulation network for testing Stacks smart contracts without using real STX.
- **Devnet**: A local development network that mimics the Stacks blockchain environment.
- **Vitest**: A fast unit test framework for JavaScript/TypeScript applications.

## Contract Deployment Terms

- **Deployer address**: The Stacks address that deployed the smart contract (e.g., `SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT`).
- **Contract name**: The identifier for a specific smart contract deployment (e.g., `minimint-core-v-i27`).
- **Version suffix**: The `-v-i27` suffix indicates iteration 27 of the contract design.

If you encounter any undefined terms, please open an issue to have them added to this glossary.