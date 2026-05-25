# Metadata Preview Timeout

## Summary
Metadata previews should fail gracefully when gateways are slow.

## Checks
- Keep retry controls available after timeout.
- Do not replace validation errors with timeout copy.
- Confirm private gateway URLs are not shown.
