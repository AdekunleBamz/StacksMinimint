# Toast queue size watch

Watch toast queue growth during high-frequency mint attempts.
Unbounded notifications can hide critical warnings and hurt responsiveness.

Escalate when more than three toasts remain queued during normal user actions for over ten seconds.

Capture toast count during rapid actions to prove queue trimming still behaves as expected.
