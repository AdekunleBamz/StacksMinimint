# Transaction timeout threshold

Track wallet-confirmation timeout expectations for each network in release notes.
Clear timeout guidance helps support triage slow-chain reports faster.

Keep one timeout expectation per network and refresh it after major chain upgrades or wallet provider changes.

Record the local timestamp when timeout starts so retries can be correlated in logs.

Record the slowest observed confirmation time from the last three transactions before adjusting timeout defaults.

Escalate timeout incidents that exceed threshold in three consecutive attempts on healthy network status.

Verification evidence: keep timestamped confirmation logs for each timeout sample used in threshold decisions.

Follow-up cadence: revisit timeout thresholds after notable network congestion periods.
