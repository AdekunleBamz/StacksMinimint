# Stake flow smoke order

Run stake, claim, and unstake in sequence during smoke checks.
Sequence validation catches state-coupling bugs better than isolated calls.

Run the stake, claim, and unstake path in that order and log transaction ids for each step.

When a step fails, restart from wallet connect to keep the flow order consistent.
