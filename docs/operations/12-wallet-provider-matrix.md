# Wallet provider matrix

Maintain a lightweight matrix of tested wallet providers for each release.
Provider-specific regressions are easier to isolate with a known baseline.

Mark unsupported wallet-and-network combinations explicitly, and tag combinations still pending verification.

Capture wallet app version alongside provider name when reporting matrix mismatches.

Review the matrix monthly and mark wallet versions that no longer receive security updates.

Escalate provider combinations that fail twice in a row even after clearing wallet session state.

Verification evidence: annotate each provider row with the date of last successful mint and claim test.

Follow-up cadence: audit wallet-provider coverage every sprint and update unsupported combinations.
