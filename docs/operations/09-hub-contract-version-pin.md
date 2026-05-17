# Hub contract version pin

Track hub contract version and deployment txid in the same release record.
Keeping both values together speeds rollback decisions.

Store the deployment transaction link beside hub version and deployer address in every handoff note.

Use the same release artifact used for deployment when validating the pinned hub version.

During hotfix releases, verify the hub pin in both `.env` and deployment summary before greenlighting QA.

Escalate if the hub pin changes without a corresponding deployment reference in release notes.

Verification evidence: save the hub contract principal from deployment output and the frontend variable used in QA.

Follow-up cadence: confirm hub pin alignment after every environment variable rotation.
