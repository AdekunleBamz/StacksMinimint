# NFT Image Fallback Cache Key

## Summary
NFT image fallbacks should use cache keys that avoid stale cross-token art.

## Checks
- Scope fallback cache by token id and gateway.
- Keep token id visible during fallback.
- Refresh stale fallback state after successful load.
