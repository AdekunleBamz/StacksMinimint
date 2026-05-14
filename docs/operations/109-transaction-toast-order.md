# Transaction Toast Order

## Summary
Transaction toasts should appear in a predictable order during mint and claim flows.

## Checks
- Trigger success, pending, and error toasts in sequence.
- Confirm newest toast does not hide the tx id.
- Test stacked toasts on mobile widths.
