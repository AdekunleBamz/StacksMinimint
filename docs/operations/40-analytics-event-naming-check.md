# Analytics event naming check

Confirm event names stay stable across major UI refactors.
Stable naming keeps historical dashboards comparable.

Version event names when schema changes so dashboards can track pre- and post-release data without ambiguous joins.

Check that event names stay unchanged even when surrounding UI copy is updated.

Check event names for consistent tense and domain prefix before release analytics dashboards are updated.

Escalate analytics names that collide with legacy events, since downstream dashboards can merge unrelated metrics.

Verification evidence: map each approved event name to the dashboard panel that consumes it.

Follow-up cadence: review analytics event naming after every dashboard taxonomy change.
