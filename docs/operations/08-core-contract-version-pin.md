# Core contract version pin

Pin the expected core contract version in pre-release verification notes.
Version ambiguity across environments is a frequent source of false alarms.

Pair the version pin with full contract principal and deployment date to avoid cross-environment confusion.

Reference the exact release tag when confirming the pinned core contract version.

Keep the pinned core contract ID in release notes and environment config identical, including version suffixes.

Escalate if pinned core contract diverges between frontend constants and deployment records.

Verification evidence: include a copy of the pinned core identifier from env config and release notes.

Follow-up cadence: verify the core pin again before tagging any release candidate.
