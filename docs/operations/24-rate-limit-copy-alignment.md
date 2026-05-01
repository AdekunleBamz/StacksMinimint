# Rate-limit copy alignment

Use one shared message style for rate-limit feedback across mint and stake actions.
Consistent copy helps users know when retries are expected.

Reuse the same cooldown wording in inline hints, toast notifications, and retry button copy for consistency.

Keep retry countdown wording consistent between toasts and inline error states.

When copy diverges, note whether backend limits changed first so copy updates do not mask policy drift.

Escalate rate-limit copy mismatches that continue after backend config deploy and CDN cache refresh.

Verification evidence: quote the exact backend limit value that supports the final UI copy.

Follow-up cadence: re-verify copy alignment whenever rate-limit policy values change.
