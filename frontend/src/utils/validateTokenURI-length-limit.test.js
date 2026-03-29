import { describe, expect, it } from 'vitest'
import { MAX_TOKEN_URI_LENGTH, validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI length limit behavior coverage.
describe('validateTokenURI', () => {
  it('rejects URIs that exceed the contract length limit', () => {
    const overLimitUri = `https://example.com/${'a'.repeat(MAX_TOKEN_URI_LENGTH)}`
    const result = validateTokenURI(overLimitUri)
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('URI too long')
  })
})
