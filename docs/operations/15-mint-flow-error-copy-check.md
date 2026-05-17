# Mint flow error copy check

Review mint error copy after contract changes to keep messages user-actionable.
Clear errors reduce repeat submissions and support noise.

Capture the exact on-screen error text, triggering step, and preceding wallet action when reviewing mint flow failures.

Include the transaction id in bug notes whenever the failing action generated one.

Capture the raw wallet error text before translating it into user-facing copy so fixes stay source-accurate.

Escalate when displayed error copy omits actionable recovery steps for wallet confirmation failures.

Verification evidence: preserve the untranslated wallet error payload together with the displayed helper copy.

Follow-up cadence: revalidate error copy after any wallet SDK or signing flow update.
