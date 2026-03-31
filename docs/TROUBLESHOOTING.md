# Troubleshooting Guide

Common issues and solutions for StacksMinimint development.

## Development Environment

### Node.js Version Issues

**Problem**: Commands fail with syntax errors or module not found.

**Solution**: 
```bash
# Check Node version (should be 18+)
node --version

# Use nvm to switch to correct version
nvm use
```

### npm Install Failures

**Problem**: `npm ci` or `npm install` fails.

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm ci
```

### Clarinet Not Found

**Problem**: `clarinet` command not recognized.

**Solution**:
```bash
# Install Clarinet (macOS)
brew install clarinet

# Or download from Hiro Systems
# https://hiro.so/platform/clarinet
```

## Frontend Issues

### Wallet Connection Fails

**Problem**: Cannot connect wallet or connection times out.

**Solutions**:
1. Ensure wallet extension is installed and unlocked
2. Check that you're on HTTPS (required for wallet connection)
3. Clear browser cache and cookies
4. Try a different browser
5. Verify wallet is set to correct network (mainnet/testnet)

### Blank Screen / White Page

**Problem**: Frontend loads but shows blank page.

**Solutions**:
1. Check browser console for errors
2. Verify environment variables are set correctly
3. Ensure Vite dev server is running: `npm run frontend:dev`
4. Check that contract addresses are valid

### Contract Interaction Fails

**Problem**: Mint button disabled or transaction fails.

**Solutions**:
1. Verify wallet is connected
2. Check contract is not paused
3. Ensure mint fee is available in wallet
4. Validate metadata URI format (ipfs:// or https://)
5. Check network congestion on Stacks explorer

## Contract Issues

### Clarinet Check Fails

**Problem**: `clarinet check` shows errors.

**Solutions**:
1. Review Clarity syntax carefully
2. Check contract dependencies are correct
3. Verify trait implementations match
4. Run `clarinet console` to test manually

### Contract Deployment Fails

**Problem**: Deployment transaction fails or reverts.

**Solutions**:
1. Ensure sufficient STX balance for deployment
2. Check contract doesn't exceed size limits
3. Verify all dependencies are deployed first
4. Review transaction on explorer for error details

## Network Issues

### Wrong Network

**Problem**: Transactions sent to wrong network.

**Solution**: Check `VITE_STX_NETWORK` environment variable and wallet network setting match.

### RPC Errors

**Problem**: Cannot connect to Stacks node.

**Solutions**:
1. Check internet connection
2. Verify RPC endpoint is accessible
3. Try different RPC provider
4. Check Stacks network status

## Testing Issues

### Vitest Failures

**Problem**: Frontend tests fail unexpectedly.

**Solutions**:
```bash
# Clear Vitest cache
npx vitest --clearCache

# Run tests in watch mode for debugging
npm run frontend:test -- --watch

# Run specific test file
npm run frontend:test -- path/to/test.js
```

### Clarinet Tests Fail

**Problem**: Contract tests fail.

**Solutions**:
1. Check test transactions have sufficient fees
2. Verify test data matches contract expectations
3. Review Clarinet.toml configuration
4. Check for race conditions in async tests

## Performance Issues

### Slow Page Loads

**Problem**: Frontend loads slowly.

**Solutions**:
1. Check network tab for slow requests
2. Optimize images and assets
3. Enable production build for testing
4. Check for console errors or warnings

### High Gas Costs

**Problem**: Contract interactions expensive.

**Solutions**:
1. Review contract for optimization opportunities
2. Batch operations when possible
3. Use read-only functions for queries
4. Consider layer-2 solutions

## Common Error Messages

### "Transaction cancelled"

**Cause**: User rejected transaction in wallet.

**Solution**: Retry and approve transaction in wallet.

### "Insufficient funds"

**Cause**: Wallet doesn't have enough STX for mint fee + gas.

**Solution**: Add more STX to wallet.

### "Contract not found"

**Cause**: Wrong contract address or network.

**Solution**: Verify contract address and network configuration.

### "Invalid metadata URI"

**Cause**: URI format not accepted.

**Solution**: Use ipfs:// or https:// URI with valid format.

## Getting Help

If you're still experiencing issues:

1. Search existing GitHub issues
2. Check Stacks Discord community
3. Review Stacks documentation
4. Open a new issue with detailed information

### Information to Include

- Operating system and browser
- Node.js and npm versions
- Error messages and stack traces
- Steps to reproduce
- Screenshots if applicable