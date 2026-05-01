# Contract event snapshot

Capture a small event snapshot after release smoke runs.
Event diffs often highlight behavior changes before full incidents form.

Store a representative event payload sample with field names whenever contract event formats change.

Store the observed block height with each event snapshot for faster replay debugging.

Attach block height and transaction id with each snapshot so later audits can replay the exact event window.

Escalate event snapshot gaps when a critical contract call lacks corresponding chain evidence.

Verification evidence: link event snapshots directly to chain explorer entries for independent verification.

Follow-up cadence: refresh event snapshots after each contract release affecting emitted events.
