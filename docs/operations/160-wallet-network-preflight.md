# Wallet Network Preflight

Wallet preflight checks should confirm the connected network matches the active mint and hub contracts.

## Checks
- Verify wallet and app network labels before opening the mint prompt.
- Compare contract aliases with the release environment.
- Stop the flow when wallet and app network labels disagree.
