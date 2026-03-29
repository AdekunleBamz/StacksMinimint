import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI valid ipfs subpath behavior coverage.
describe('validateTokenURI', () => {
  it('accepts IPFS URIs with nested JSON paths', () => {
    expect(validateTokenURI('ipfs://QmValidCid/metadata/1.json').isValid).toBe(true)
  })
})
