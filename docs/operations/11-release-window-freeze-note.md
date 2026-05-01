# Release window freeze note

Avoid non-critical config churn during active release windows.
Short freeze windows reduce accidental drift while smoke tests are running.

Post freeze and thaw times in UTC and local release-owner time to keep reviewers aligned.

Always record freeze start and end times with timezone to avoid handoff confusion.

Call out any exception approvals explicitly with approver name and expiry date before unfreezing merges.

Escalate freeze exceptions that are still open within one hour of planned cutoff.

Verification evidence: store approval comments and timestamps for any freeze exception in the release issue.

Follow-up cadence: revisit freeze guidance at the start of each release planning cycle.
