# Wallet network alignment

Before running mint or stake actions, confirm that the wallet network and frontend network are identical.
Most transaction-link and nonce confusion starts from mixed network sessions.

Capture the wallet chain selector and app network badge in one screenshot before retrying a failed transaction in the same browser session.

If mismatch persists, disconnect and reconnect the wallet before retrying.

Log the chain ID shown by the wallet and app badge in the same ticket comment so retries use the right target.

Escalate to wallet support if network mismatch reappears after a hard reconnect and clean browser restart.

Verification evidence: attach one screenshot showing wallet network selector and app network badge in the same frame.

Follow-up cadence: re-confirm this check at the start of every release candidate smoke run.
