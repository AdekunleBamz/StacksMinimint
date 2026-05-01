# Toast queue size watch

Watch toast queue growth during high-frequency mint attempts.
Unbounded notifications can hide critical warnings and hurt responsiveness.

Escalate when more than three toasts remain queued during normal user actions for over ten seconds.

Capture toast count during rapid actions to prove queue trimming still behaves as expected.

Note the queue length at incident start and after mitigation to confirm whether the fix restored normal throughput.

Escalate queue spikes that sustain beyond one release window even after user-facing error rates normalize.

Verification evidence: log queue depth samples at fixed intervals while mitigation is in progress.

Follow-up cadence: rerun queue watch checks after every alert tuning change.
