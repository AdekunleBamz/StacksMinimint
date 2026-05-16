# Gallery cache key note

Gallery refresh checks should include wallet address, network, and contract alias in the cache key review.

If minted NFTs appear stale, clear only the affected collection cache before asking the user to reconnect.

This prevents unrelated gallery state from being reset during support triage.
