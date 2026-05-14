# Release Artifact Cleanliness

## Summary
Build artifacts and local deployment metadata should stay out of commits unless intentionally tracked.

## Checks
- Inspect git status after frontend builds.
- Leave generated `dist/` and local deployment metadata uncommitted.
- Explain intentional generated artifacts in release notes.
