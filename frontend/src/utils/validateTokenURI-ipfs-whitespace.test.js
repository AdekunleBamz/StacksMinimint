import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI ipfs whitespace behavior coverage.
describe('validateTokenURI', () => {
  it('rejects ipfs URIs with spaces in the CID path', () => {
    const result = validateTokenURI('ipfs://QmExample path')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Invalid IPFS URI')
  })
})
