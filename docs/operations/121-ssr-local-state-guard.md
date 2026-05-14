# SSR Local State Guard

## Summary
Local wallet and theme state should not cause server/client render mismatches.

## Checks
- Refresh with saved wallet and theme preferences.
- Confirm fallback content is stable before hydration.
- Recheck after adding local storage reads.
