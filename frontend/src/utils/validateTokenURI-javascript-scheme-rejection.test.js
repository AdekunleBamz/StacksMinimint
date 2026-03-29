import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI javascript scheme rejection behavior coverage.
describe('validateTokenURI', () => {
  it('rejects javascript schemes as unsupported', () => {
    const result = validateTokenURI('javascript:alert(1)')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Unsupported scheme')
  })
})
