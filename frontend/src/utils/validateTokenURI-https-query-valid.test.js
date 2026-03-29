import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI https query valid behavior coverage.
describe('validateTokenURI', () => {
  it('accepts HTTPS metadata URLs with query parameters', () => {
    expect(validateTokenURI('https://example.com/meta.json?v=1').isValid).toBe(true)
  })
})
