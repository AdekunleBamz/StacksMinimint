import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI ipfs empty prefix path behavior coverage.
describe('validateTokenURI', () => {
  it('rejects ipfs://ipfs/ values that omit a CID path', () => {
    const result = validateTokenURI('ipfs://ipfs/')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Invalid IPFS URI')
  })
})
