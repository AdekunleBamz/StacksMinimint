# Automation Scripts

This directory is reserved for optional automation tooling (wallet generation, funding flows, and interaction helpers).

The root scripts in `package.json` (`scripts:wallets`, `scripts:distribute`, `scripts:interact`, etc.) run only when this folder includes its own `package.json`.

## Typical Workflow

```bash
# Install the optional automation package when present
npm run scripts:install

# Generate wallets
npm run scripts:wallets

# Distribute test STX
npm run scripts:distribute
