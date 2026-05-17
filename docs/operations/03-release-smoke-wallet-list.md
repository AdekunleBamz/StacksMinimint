# Release smoke wallet list

Keep a short list of known-good wallets for release smoke tests.
Rotating through the same curated set improves comparability between releases.

Tag each smoke wallet with an owner, last successful verification date, and preferred wallet extension version.

Keep one control wallet untouched so repeated smoke runs have a stable baseline.

Retire a smoke wallet from rotation immediately after two consecutive unexplained failures.

Escalate if more than one smoke wallet fails the same flow in a single release candidate run.

Verification evidence: link the latest successful smoke run for each wallet in the curated list.

Follow-up cadence: refresh wallet health annotations weekly so smoke baselines stay current.
