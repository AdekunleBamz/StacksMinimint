# Wallet Network Preflight

## Summary
Mint, stake, and claim actions should verify wallet network first.

## Checks
- Disable writes on the wrong network.
- Preserve form state after network switches.
- Keep contract alias copy near the warning.
