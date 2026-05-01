# Rate spike alert thresholds

Define basic thresholds for sudden request spikes across mint endpoints.
Early alerts help distinguish growth events from abuse traffic.

Document baseline and spike thresholds per environment, plus owner-reviewed exceptions, to reduce false-positive alert noise.

Note the baseline window used for comparison when escalating rate spike alerts.

Revisit thresholds after major traffic campaigns because baseline mint velocity can shift quickly.

Escalate when alert thresholds trigger noise for a full day without corresponding chain traffic changes.

Verification evidence: store threshold change history with links to traffic graphs used for justification.

Follow-up cadence: reassess alert thresholds after each major product launch window.
