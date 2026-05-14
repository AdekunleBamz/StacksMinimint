# Image Cache Fallback

## Summary
NFT image loading should fall back gracefully when cached images are stale or unavailable.

## Checks
- Simulate broken image URLs.
- Confirm fallback art does not hide token id.
- Provide refresh guidance for cache delays.
