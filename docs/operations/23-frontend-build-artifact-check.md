# Frontend build artifact check

Verify build artifacts update after dependency changes and cache invalidation.
Stale assets can keep fixed bugs visible in production.

Confirm built assets reference current contract constants and expected network flags before publishing artifacts.

Compare build artifact hash output with CI logs before deployment approval.

Store the build timestamp and commit hash from artifact metadata to simplify rollback verification later.
