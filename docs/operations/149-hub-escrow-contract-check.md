# Hub escrow contract check

Marketplace and staking tests should verify the hub contract is the only expected escrow path.

Confirm list, unlist, buy, stake, and unstake flows use the same core contract alias.

This catches environment drift before users approve asset transfers.
