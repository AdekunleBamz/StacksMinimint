# Contract read-only probe note

Run read-only probes after deployment so mint supply, owner, and hub state are verified without submitting extra transactions.

## Checklist

- Query total supply and one token owner after deployment.
- Record the response values with the deployment block height.
