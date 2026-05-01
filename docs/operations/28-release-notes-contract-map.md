# Release notes contract map

Include a contract address-and-name map in every release note.
Clear mapping reduces deployment confusion for integrators.

Map every release note item to either a contract txid or frontend commit, and include the primary reviewer.

Include source contract file path in release notes mapping for traceability.

Map each release note bullet to a concrete contract function so QA can quickly verify behavioral impact.

Escalate release notes when mapped contract changes do not have matching QA evidence links.

Verification evidence: add a URL to the exact contract diff for each release note item.

Follow-up cadence: sync release-note mappings again during final go/no-go review.
