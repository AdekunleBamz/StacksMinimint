# Network Switch Guidance

## Summary
Wrong-network messages should name the expected network and provide a manual recovery path.

## Checks
- Test mainnet, testnet, and disconnected states.
- Confirm write actions are disabled on the wrong network.
- Keep rejected switch prompts retryable.
