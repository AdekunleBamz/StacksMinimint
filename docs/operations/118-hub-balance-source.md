# Hub Balance Source

## Summary
Hub balance displays should name whether values come from contract reads, explorer data, or cache.

## Checks
- Compare displayed balances against readonly calls.
- Confirm cached values show last updated time.
- Keep stale labels visible after failed refresh.
