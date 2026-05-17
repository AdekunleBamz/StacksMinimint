# Explorer link network validation

Confirm that generated explorer links match the active network before production rollout.
Wrong explorer targets make valid transactions look missing.

Match explorer base domain and path prefix to the active chain before sharing transaction links.

Confirm the explorer URL chain parameter matches the network badge shown in-app.

Open one txid link and one address link from the same session to confirm both resolve to the selected network.

Escalate if explorer URLs resolve to different networks for the same transaction context.

Verification evidence: include one explorer URL per type (txid, token, and address) from the same test session.

Follow-up cadence: perform explorer network validation after each environment switch.
