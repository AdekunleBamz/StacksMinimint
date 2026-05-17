# UI cache-bust confirmation

After deployment, confirm cache-busting headers and asset hashes are active.
This prevents users from running outdated frontend bundles.

Use a cache-disabled hard reload, then confirm new asset hashes and response headers after deployment.

Validate cache-bust behavior in both hard refresh and private browsing sessions.

After cache busting, verify asset hashes changed in network logs before asking users for a hard refresh.

Escalate if stale UI persists after verified new asset hashes are served from the edge.

Verification evidence: save response headers showing updated cache control values after bust confirmation.
