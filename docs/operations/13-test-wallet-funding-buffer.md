# Test wallet funding buffer

Keep an extra STX buffer in test wallets before running migration checks.
Insufficient balance failures can hide real contract-level issues.

Keep at least two expected transaction fees of extra STX in every smoke wallet, plus one buffer for retry scenarios.

Set a top-up trigger amount so smoke checks never pause on avoidable low balance failures.

Top up funding before the first daily smoke pass so retries do not stall midway through validation.

Escalate when refill requests are repeated within the same day, since that can hide runaway test behavior.

Verification evidence: keep a funding transaction link for each refill to maintain audit continuity.

Follow-up cadence: validate funding buffers before every coordinated QA session.
