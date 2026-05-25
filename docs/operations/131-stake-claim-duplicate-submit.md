# Stake Claim Duplicate Submit

## Summary
Stake claim actions should prevent duplicate wallet prompts.

## Checks
- Disable claim while confirmation is pending.
- Keep pending state tied to the active stake id.
- Restore the action after failed callbacks.
