# Local Preview Metadata

## Summary
Local preview metadata should remain uncommitted unless deployment settings are intentionally tracked.

## Checks
- Leave `.vercel/` folders out of source commits.
- Record deployment settings in docs instead of local metadata.
- Run `git status --short` after linking preview projects.
