# Mint Confirmation Idempotency

## Summary
Mint confirmation flows should submit exactly once per user action.

## Checks
- Keep pending state visible through wallet callbacks.
- Prevent duplicate callback handling.
- Refresh mint totals once after success.
