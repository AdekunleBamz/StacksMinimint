# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| latest `main` | ✅ |

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

To report a security issue, email the maintainer directly or open a [GitHub Security Advisory](https://github.com/AdekunleBamz/stacksminimint/security/advisories/new) using the private disclosure flow.

Include in your report:
- A clear description of the vulnerability
- Steps to reproduce
- Potential impact
- Any suggested mitigations (optional)

### Response Timeline

| Stage | Target time |
|-------|-------------|
| Initial acknowledgement | Within 48 hours |
| Severity assessment | Within 5 business days |
| Patch release (critical) | Within 14 days of confirmation |
| Patch release (non-critical) | Within 30 days of confirmation |
| Public disclosure | After patch is released |

## Smart Contract Security

All Clarity contracts in this repository have been reviewed for common Stacks/Clarity vulnerabilities including:
- Integer overflow/underflow (Clarity uses checked arithmetic)
- Unauthorized principal access
- Incorrect post-condition usage
- Re-entrancy (not applicable in Clarity)

Community audits and independent reviews are always welcome.
