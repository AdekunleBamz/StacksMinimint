# Contract paused-state check

Include paused-state verification in every release smoke sequence.
Pause wiring regressions can break emergency response paths.

Validate paused-state read-only output and visible UI banner in the same test run, then confirm action buttons are disabled.

Capture both on-chain paused status and matching UI badge state before sign-off.

Capture the exact block height where pause state was observed so unpause verification can use a reliable baseline.

Escalate if paused-state reads disagree across RPC providers for the same block height.

Verification evidence: preserve paused-state call outputs from two independent providers for comparison.
