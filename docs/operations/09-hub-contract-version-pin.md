# Hub contract version pin

Track hub contract version and deployment txid in the same release record.
Keeping both values together speeds rollback decisions.

Store the deployment transaction link beside hub version and deployer address in every handoff note.

Use the same release artifact used for deployment when validating the pinned hub version.

During hotfix releases, verify the hub pin in both `.env` and deployment summary before greenlighting QA.
