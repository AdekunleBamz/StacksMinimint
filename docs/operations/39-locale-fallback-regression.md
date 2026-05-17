# Locale fallback regression check

Run one locale fallback check in every release validation pass.
Broken fallback behavior often appears only in secondary languages.

Test locale fallback behavior for both missing translation keys and unsupported locale codes across connected and disconnected wallet states.

Validate at least one non-English locale before final regression sign-off.

Verify fallback copy in at least one non-English locale during smoke checks to catch translation key drift.

Escalate locale regressions when fallback keys display raw token names in production previews.

Verification evidence: attach localized screenshots and fallback-key behavior from the same test run.

Follow-up cadence: re-check locale fallback behavior at least once per translation release cycle.
