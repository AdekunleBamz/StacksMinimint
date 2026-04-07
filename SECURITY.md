# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| v-i27   | :white_check_mark: |
| < v-i27 | :x:                |

## Reporting a Vulnerability

We take the security of StacksMinimint seriously. If you believe you've found a security vulnerability, please follow these steps:

1. **Do not disclose the vulnerability publicly** until it has been addressed by our team.

2. **Email your findings** to security@stacksminimint.dev with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (if applicable)
   - Your GPG key if you'd like encrypted communication

3. **Expected response time**: We aim to acknowledge receipt within 48 hours and provide an initial assessment within 5 business days.

4. **Security updates**: Once a fix is deployed, we will publish a security advisory and update this policy as needed.

## Security.txt

Our security.txt file is available at:
- [/.well-known/security.txt](/.well-known/security.txt)

## Smart Contract Security

### Audit Status

| Contract | Status | Date |
|----------|--------|------|
| minimint-core-v-i27 | Internal Review | - |
| minimint-hub-v-i27 | Internal Review | - |

### Security Considerations

#### Access Control
- Only the contract owner can pause minting or transfer ownership
- Hub contract is whitelisted to transfer NFTs for escrow functionality
- All admin functions verify caller identity

#### Reentrancy Protection
- Clarity's synchronous execution model prevents reentrancy attacks
- State changes occur before external calls

#### Integer Overflow
- Clarity uses fixed-size integers with built-in overflow protection
- No additional overflow checks needed

#### Front-Running
- NFT purchases are first-come-first-served
- Consider slippage tolerance for time-sensitive operations

## Bug Bounty Scope

### In Scope
- Smart contract vulnerabilities
- Access control bypass
- Economic exploits
- Denial of service vectors

### Out of Scope
- Theoretical vulnerabilities without proof of concept
- Already reported vulnerabilities
- Issues in third-party dependencies

## Incident Response

In the event of a security incident:

1. **Assessment**: Evaluate severity and scope
2. **Containment**: Pause affected contracts if necessary
3. **Resolution**: Deploy fixes and verify
4. **Communication**: Notify users and stakeholders
5. **Review**: Conduct post-incident analysis

## Security Best Practices

When working with StacksMinimint, please follow these guidelines:

- Always verify contract addresses before interacting
- Use hardware wallets for significant holdings
- Keep your wallet software up to date
- Never share your private keys or seed phrases
- Review transaction details carefully before confirming

## Known Limitations

- Smart contracts on Stacks are immutable once deployed
- Always test thoroughly on testnet before mainnet deployment
- Gas fees may vary based on network conditions

Thank you for helping keep StacksMinimint secure!