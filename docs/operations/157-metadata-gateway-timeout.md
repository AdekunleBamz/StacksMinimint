# Metadata Gateway Timeout

Metadata gateway reviews should verify NFT previews remain understandable when an image or JSON gateway is slow.

## Checks
- Simulate a delayed metadata response in a preview environment.
- Confirm fallback copy does not imply the token failed to mint.
- Record the gateway host when timeout behavior is reported.
