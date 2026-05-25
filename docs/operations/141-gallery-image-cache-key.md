# Gallery Image Cache Key

## Summary
Gallery image cache keys should account for gateway and token id.

## Checks
- Refresh cache after metadata gateway changes.
- Keep fallback images tied to token ids.
- Avoid leaking private gateway URLs in cache notes.
