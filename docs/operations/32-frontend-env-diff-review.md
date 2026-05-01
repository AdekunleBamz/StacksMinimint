# Frontend env diff review

Review frontend environment diffs before tagging releases.
Most production-only regressions trace back to overlooked env changes.

Review env diffs against production defaults, and ensure sensitive values stay redacted in screenshots and logs.

Redact secret values while still noting key presence when reviewing env differences.

Review variable renames in both `.env` and deployment docs to avoid stale key names after refactors.

Escalate when env key differences cannot be reconciled with release notes or deployment artifacts.

Verification evidence: capture a redacted env diff artifact and reference it in the release thread.

Follow-up cadence: re-run env diff review before every staging-to-production promotion.
