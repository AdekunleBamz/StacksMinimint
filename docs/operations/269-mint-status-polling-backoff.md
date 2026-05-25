# Mint Status Polling Backoff

## Summary
Mint status polling should slow down for long-pending transactions.

## Checks
- Use stepped polling intervals after initial confirmation window.
- Keep manual refresh available.
- Confirm pending labels remain visible.
