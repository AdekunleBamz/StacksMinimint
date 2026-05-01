# Error boundary retry path

Check that error boundaries expose a visible retry action after recoverable failures.
Users should not need to refresh the entire app for transient errors.

Verify retry actions restore focus to a predictable control and clear stale error banners for keyboard-only users.

Confirm retry returns focus to a usable control so keyboard flow stays intact.

Capture the retry path with a short screen recording when possible so support can mirror the exact sequence.

Escalate when retry action loops users back to the same boundary without new diagnostic details.

Verification evidence: include retry button behavior before and after the failure state clears.

Follow-up cadence: retest retry paths after every error boundary or telemetry instrumentation change.
