# Stake flow smoke order

Run stake, claim, and unstake in sequence during smoke checks.
Sequence validation catches state-coupling bugs better than isolated calls.

Run the stake, claim, and unstake path in that order to validate state transitions end-to-end.
