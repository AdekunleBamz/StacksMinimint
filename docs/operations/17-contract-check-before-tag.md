# Contract check before tagging

Run contract checks immediately before creating release tags.
This avoids tagging commits with stale unverified contract edits.

Record the checked commit SHA and tool version with the release tag so contract validation is auditable later.

Verify the contract address and contract name pair before creating the release tag.
