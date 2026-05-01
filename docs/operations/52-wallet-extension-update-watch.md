# Wallet extension update watch

Track major wallet extension updates around release windows.
Provider updates can alter signing behavior without app code changes.

Track extension auto-update channels, pinned versions, and browser support windows for every supported wallet.

After extension auto-updates, rerun connect and disconnect flows before release approval.

After extension updates, re-check network permissions and previously granted site access before retrying transactions.

Escalate extension update regressions that block signing on previously healthy wallets.

Verification evidence: capture extension version, browser version, and observed signing behavior after updates.
