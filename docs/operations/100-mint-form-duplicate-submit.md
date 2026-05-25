# Mint Form Duplicate Submit

## Summary
Mint actions should stay disabled while wallet confirmation is pending.

## Checks
- Keep pending state tied to the active mint quantity.
- Restore the submit action after failed wallet callbacks.
- Confirm duplicate prompts are not opened by rapid taps.
