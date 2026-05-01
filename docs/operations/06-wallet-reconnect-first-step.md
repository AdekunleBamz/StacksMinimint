# Wallet reconnect first step

When transaction signing stalls, test wallet reconnect before deeper debugging.
Session refresh resolves a large share of stuck confirmation states.

When reconnect resolves the issue, log wallet extension version and browser name for trend analysis.

If reconnect still fails, refresh the page once before clearing local wallet session data.
