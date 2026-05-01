# Transaction replay check

Verify transaction replay handling in UI logs during retry scenarios.
Replay-safe handling prevents duplicate state updates.

Re-run duplicate submission scenarios using the same wallet session and across a reconnect to catch replay edges.

Confirm nonce and memo values before replaying a transaction to avoid duplicate errors.

For suspected replays, compare nonce and txid together before escalating to contract-level investigation.

Escalate replay suspicions that involve identical payloads from different accounts within a short window.

Verification evidence: record nonce, txid, and submission timestamp for each suspected replay sample.

Follow-up cadence: repeat replay detection checks after nonce-handling or wallet submission flow changes.
