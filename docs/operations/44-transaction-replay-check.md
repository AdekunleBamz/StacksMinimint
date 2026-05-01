# Transaction replay check

Verify transaction replay handling in UI logs during retry scenarios.
Replay-safe handling prevents duplicate state updates.

Re-run duplicate submission scenarios using the same wallet session and across a reconnect to catch replay edges.

Confirm nonce and memo values before replaying a transaction to avoid duplicate errors.

For suspected replays, compare nonce and txid together before escalating to contract-level investigation.
