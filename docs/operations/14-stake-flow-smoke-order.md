# Stake flow smoke order

Run stake, claim, and unstake in sequence during smoke checks.
Sequence validation catches state-coupling bugs better than isolated calls.

Run the stake, claim, and unstake path in that order and log transaction ids for each step.

When a step fails, restart from wallet connection to keep the flow order consistent.

If stake and claim are both tested, keep the same wallet for both actions to preserve cooldown context.

Escalate if cooldown behavior differs between identical stake flows on two wallets in the same block range.

Verification evidence: log wallet address, stake txid, and claim txid when validating cooldown visibility.

Follow-up cadence: repeat stake flow order validation whenever claim logic or cooldown UI changes.
