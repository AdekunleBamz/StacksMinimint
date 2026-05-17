# Wallet reconnect first step

When transaction signing stalls, try a wallet reconnect before deeper debugging.
Session refresh resolves a large share of stuck confirmation states.

When reconnect resolves the issue, log wallet extension version and browser name for trend analysis.

If reconnect still fails, refresh the page once before clearing local wallet session data.

Ask the tester to close duplicate wallet extension popups before reconnecting to avoid stale session prompts.

Escalate if reconnect fails in two browsers, which usually signals a wallet service or network issue.

Verification evidence: note browser version and wallet extension version alongside reconnect outcomes.

Follow-up cadence: verify reconnect reliability monthly on the latest stable browser versions.
