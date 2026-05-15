# Build Warning Capture

## Summary
Production build warnings should be captured when a release accepts them.

## Checks
- Record `npm run frontend:build` status.
- Include warning package names in release notes when relevant.
- Revisit recurring warnings during dependency updates.
