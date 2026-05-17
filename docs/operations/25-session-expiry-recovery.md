# Session expiry recovery

When wallet sessions expire, preserve pending user input where safe.
Recoverable forms reduce frustration during reconnect flows.

Document observed session age, exact recovery action, and whether unsent form state was restored for each incident.

Record the recovery timestamp to verify the refreshed session actually took effect.

After recovery, verify the same wallet can mint again without a full page reload to confirm session health.

Escalate if session recovery repeatedly drops pending transaction state before confirmation completes.

Verification evidence: document the recovered session timestamp and the first successful action afterward.

Follow-up cadence: verify session recovery behavior after authentication and wallet connector updates.
