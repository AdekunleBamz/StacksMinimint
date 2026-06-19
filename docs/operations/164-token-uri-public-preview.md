# Token URI Public Preview

Token URI checks should remind reviewers that metadata URLs and preview images can become public after mint.

## Checks
- Verify token URI schemes are allowed for the target network.
- Confirm preview images do not contain private or unreleased assets.
- Record gateway fallback behavior when a URI fails to load.
