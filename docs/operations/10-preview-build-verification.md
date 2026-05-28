# Preview build verification

Open the preview build with a clean browser session before announcing a release.
This catches stale cache issues and environment leakage problems early.

Run preview validation once in an incognito window and once after a hard refresh with extension caches disabled.

Include one mobile viewport check before marking preview validation complete.

If preview output differs from local expectations, attach the exact preview URL and commit SHA in the release checklist.

Escalate preview regressions that reproduce on both preview and local builds from the same commit.

Verification evidence: attach the preview link and a screenshot of the commit SHA banner from the hosting dashboard.

Confirm wallet callback domains in the preview environment before sharing links with external testers.

Follow-up cadence: re-check preview verification after every dependency bump touching build tooling.
