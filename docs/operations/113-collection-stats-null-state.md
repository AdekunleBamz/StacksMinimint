# Collection Stats Null State

## Summary
Collection stats should handle unavailable reads without rendering misleading zeros.

## Checks
- Simulate failed supply and mint price reads.
- Confirm true zero and unavailable values look different.
- Keep retry controls near failed stats.
