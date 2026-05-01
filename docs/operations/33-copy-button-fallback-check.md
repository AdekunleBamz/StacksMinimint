# Copy button fallback check

Verify copy actions provide fallback feedback when clipboard APIs fail.
Address and txid copy reliability is critical during support triage.

Test copy fallback behavior in a browser profile where clipboard permissions are denied or temporarily unavailable.

Confirm fallback helper text appears when clipboard permissions are denied.

Test both clipboard permission granted and denied states on at least one mobile browser in each release cycle.

Escalate if fallback copy still fails when the browser blocks clipboard access and JavaScript permissions are reset.

Verification evidence: record copy attempts in browsers with and without clipboard permission grants.

Follow-up cadence: rerun fallback checks after browser permission model changes or major releases.
