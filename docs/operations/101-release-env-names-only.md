# Release Env Names Only

## Summary
Release handoff should list environment variable names without exposing values.

## Checks
- Compare local, preview, and production variable names.
- Redact values from screenshots and terminal output.
- Confirm optional variables have safe defaults.
