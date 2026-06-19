# Metadata URI timeout note

Keep metadata URI timeout behavior in QA so previews degrade clearly when remote token metadata is slow.

## Checklist

- Load a token metadata URI through a throttled connection.
- Confirm the UI shows a recoverable loading or fallback state.
