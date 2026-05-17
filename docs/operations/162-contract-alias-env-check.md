# Contract Alias Env Check

Contract alias checks should confirm frontend environment values match the contracts selected for release.

## Checks
- Compare mint, hub, token, and trait aliases before building.
- Confirm preview deployments do not keep stale local aliases.
- Include alias diffs when environment files change.
