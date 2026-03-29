import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI https fragment valid behavior coverage.
describe('validateTokenURI', () => {
  it('accepts HTTPS metadata URLs with hash fragments', () => {
    expect(validateTokenURI('https://example.com/meta.json#nft').isValid).toBe(true)
  })
})
