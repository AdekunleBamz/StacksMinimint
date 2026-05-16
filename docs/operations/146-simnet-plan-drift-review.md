# Simnet plan drift review

When Clarinet reports a generated deployment plan diff, review it before accepting local changes.

The plan should publish traits before contracts that implement them.

Keep generated plan updates separate from feature commits unless the deployment order actually changed.
