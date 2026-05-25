# Wallet Session Cleanup

## Summary
Disconnecting wallets should clear wallet-specific local state.

## Checks
- Preserve public preferences such as theme.
- Refresh balances after reconnect.
- Avoid clearing public gallery cache unnecessarily.
