# Mint Quantity Stepper Boundary

## Summary
Mint quantity steppers should respect contract boundaries.

## Checks
- Prevent decrement below the minimum.
- Prevent increment above the maximum or remaining supply.
- Confirm helper text updates with stepper changes.
