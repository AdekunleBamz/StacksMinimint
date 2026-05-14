# Contract Paused Readonly

## Summary
Paused contract states should block writes while keeping readonly collection data visible.

## Checks
- Load mint, gallery, and stats while paused.
- Confirm disabled actions explain the paused state.
- Avoid hiding already minted NFTs.
