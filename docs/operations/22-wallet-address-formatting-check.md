# Wallet address formatting check

Validate address truncation and copy behavior on both desktop and mobile layouts.
Poor formatting increases mis-send anxiety for users.

Validate that truncated addresses still keep enough prefix and suffix to disambiguate common wallets and copied values stay exact.

Verify copied wallet values keep the expected prefix and casing from the source field.

Validate truncated and full wallet address displays side by side when reviewing formatting updates.

Escalate if address clipping hides distinguishing characters for two different users in the same view.

Verification evidence: include screenshots at normal and high zoom to confirm address readability.

Follow-up cadence: re-check address formatting after typography or responsive layout changes.
