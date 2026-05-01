# Stake claim cooldown visibility

Expose cooldown expectations clearly after staking actions.
Users are less likely to retry prematurely when timing is explicit.

Capture both relative countdown and absolute unlock time, and verify they stay in sync after refresh.

Recheck cooldown labels after refresh to confirm timer state survives reloads.

When cooldown seems missing, confirm wallet and explorer timestamps are compared in the same timezone.

Escalate if claim cooldown countdown is absent while on-chain eligibility still shows pending.

Verification evidence: log cooldown start and expected claim time using the same network clock source.

Follow-up cadence: rerun cooldown visibility checks after staking rule or copy changes.
