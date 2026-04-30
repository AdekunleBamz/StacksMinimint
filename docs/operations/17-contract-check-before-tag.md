# Contract check before tagging

Run contract checks immediately before creating release tags.
This avoids tagging commits with stale unverified contract edits.

Record the checked commit SHA with the release tag so contract validation is auditable later.
