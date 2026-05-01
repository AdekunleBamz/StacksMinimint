# Transaction timeout threshold

Track wallet-confirmation timeout expectations per network in release notes.
Clear timeout guidance helps support triage slow-chain reports faster.

Keep one timeout expectation per network and refresh it after major chain upgrades or wallet provider changes.

Record the local timestamp when timeout starts so retries can be correlated in logs.

Record the slowest observed confirmation time from the last three transactions before adjusting timeout defaults.
