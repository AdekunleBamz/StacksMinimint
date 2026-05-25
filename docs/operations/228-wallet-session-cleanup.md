# Wallet Session Cleanup

## Summary
Disconnect should clear wallet-specific state without removing public settings.

## Checks
- Clear wallet-scoped balances and drafts.
- Preserve theme and display preferences.
- Start reconnect with a fresh contract read.
