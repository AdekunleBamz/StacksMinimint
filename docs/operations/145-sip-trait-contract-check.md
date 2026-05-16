# SIP trait contract check

`clarinet check` depends on the local SIP-009 and SIP-010 trait contracts referenced by the active minimint contracts.

Before release, confirm `contracts/archive/sip-009-nft-trait-v-i27.clar` and `contracts/archive/sip-010-trait-ft-standard-v-i27.clar` are present.

If trait paths change, update Clarinet configuration and rerun contract checks before frontend validation.
