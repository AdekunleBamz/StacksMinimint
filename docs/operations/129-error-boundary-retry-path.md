# Error Boundary Retry Path

## Summary
Error boundaries should offer a retry path that returns users to the interrupted mint or gallery action.

## Checks
- Trigger component and route-level error boundaries.
- Confirm reset restores a usable state.
- Preserve non-sensitive action context for support.
