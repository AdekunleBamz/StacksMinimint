# Post-deploy contract alias check

After deployments, verify frontend env aliases point to the new core and hub contract identifiers.
Alias drift causes silent read/write mismatches that look like UI faults.

Record both previous and new alias values in the release thread before cache clearing, then link the diff for reviewers.

Cross-check aliases against the deployment artifact used in the same release window.

Include the exact contract principal copied from deployment output to reduce alias typos during handoff.

Escalate immediately when alias values differ between environments after cache invalidation.

Verification evidence: include a screenshot of updated aliases and the deployment artifact snippet used for the release.

Follow-up cadence: review alias alignment after every deployment and again after any emergency hotfix.
