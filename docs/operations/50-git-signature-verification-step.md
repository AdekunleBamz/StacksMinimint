# Git signature verification step

Add signature verification to pre-release checks for protected branches.
Verified signatures improve confidence in release provenance.

Confirm signature status in the remote branch or pull request view after pushing and before release notes are published.

Attach a verified-signature screenshot to release artifacts when audit evidence is needed.

Use `git log --show-signature -1` in release verification comments so reviewers can confirm the signature state quickly.

Escalate release blocks where signature verification fails on a maintainer environment.

Verification evidence: capture signed commit hash and verification output in the release approval thread.
