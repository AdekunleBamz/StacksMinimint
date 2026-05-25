# Reward Claim Duplicate Submit

## Summary
Reward claim flows should reject duplicate submits while pending.

## Checks
- Disable claim submit during wallet confirmation.
- Keep claim amount visible through callbacks.
- Confirm failed claims restore the action once.
