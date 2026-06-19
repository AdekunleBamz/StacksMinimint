# Stake Claim Cooldown Height

Stake claim cooldown reviews should capture block-height evidence before a claim is treated as incorrectly disabled.

## Checks
- Compare the current block height with the claim cooldown height.
- Retry after a fresh block when UI and contract reads disagree.
- Include the token ID or stake ID in triage notes when safe.
