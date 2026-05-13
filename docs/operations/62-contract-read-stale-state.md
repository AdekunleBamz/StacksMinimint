# Contract read stale state

When contract reads fail, keep the last successful value visible with a stale label.

Avoid replacing meaningful balances or limits with blank placeholders during transient RPC failures.

Verification evidence: log the stale state timestamp and recovery timestamp during release checks.
