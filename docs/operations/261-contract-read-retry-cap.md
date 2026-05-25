# Contract Read Retry Cap

## Summary
Contract read retries should have clear caps and recovery copy.

## Checks
- Stop automatic retries after the configured cap.
- Keep manual retry available.
- Preserve last known good data during failures.
