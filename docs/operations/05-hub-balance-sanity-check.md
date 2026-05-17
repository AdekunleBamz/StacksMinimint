# Hub balance sanity check

During maintenance windows, compare hub contract balances against recent stake and unstake activity.
This quick check catches accounting regressions before users notice them.

Include the snapshot block height and query timestamp when recording hub balances for incident follow-up.

Capture before-and-after balance snapshots to make drift investigation faster.

Note the sampled block height beside each hub balance reading so later comparisons use the same reference point.

Escalate when hub balance deltas cannot be explained by known mint or reward transactions.

Verification evidence: capture balance snapshots before and after key transactions in the same monitoring window.

Follow-up cadence: re-run balance sanity checks after each mint campaign ends.
