# Reward Symbol Copy

## Summary
Reward token labels should stay aligned between frontend environment variables and contract docs.

## Checks
- Confirm `VITE_TOKEN_SYMBOL` is UI-only before changing copy.
- Keep token symbol updates out of contract-name changes unless both are intended.
- Recheck reward labels in mint and staking screens.
