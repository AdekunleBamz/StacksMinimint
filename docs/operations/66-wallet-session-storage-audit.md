# Wallet session storage audit

Review wallet session persistence for stale account and network values.

Session restore should not enable mint actions until the wallet state has been revalidated.

Verification evidence: reload after disconnect, reconnect, and account switch flows before release.
