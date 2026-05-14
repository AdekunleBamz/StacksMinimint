# Contract Read Retry Cap

## Summary
Contract reads should cap retries and offer manual refresh after repeated failures.

## Checks
- Simulate repeated readonly failures.
- Confirm loading states do not persist forever.
- Keep retry copy separate from write-action errors.
