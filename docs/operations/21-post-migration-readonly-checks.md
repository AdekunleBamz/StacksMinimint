# Post-migration read-only checks

After migrations, run a small set of read-only contract queries and capture outputs.
This verifies baseline contract visibility before write traffic resumes.

Snapshot key read-only responses before and after migration with block height markers for quick regression diffing.

Run read-only checks with a non-owner wallet to confirm write paths remain blocked.

Keep a snapshot of read-only call outputs from before migration so post-migration drift is easy to compare.
