# Mint fee display consistency

Ensure mint fee copy uses the same unit label across forms, toasts, and receipts.
Mixed STX and micro-STX labels trigger avoidable user confusion.

Verify fee wording in form hints, confirmation toasts, and receipt views before release sign-off, including token symbol placement.

Verify the fee copy is identical in the card, confirmation step, and receipt details.

When values differ, post both the on-chain fee and rendered fee in the release thread before merging a fix.

Escalate if fee text and wallet confirmation still differ after a full page refresh on the same commit.

Verification evidence: preserve one screenshot of UI fee copy and one wallet prompt showing the same amount.

Follow-up cadence: repeat fee consistency checks after any contract upgrade or wallet extension update.
