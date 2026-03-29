import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI credentials helper copy behavior coverage.
describe('validateTokenURI', () => {
  it('returns credential removal guidance for URLs with auth fields', () => {
    const result = validateTokenURI('https://user:pass@example.com/meta.json')
    expect(result.isValid).toBe(false)
    expect(result.helper).toContain('without embedded username or password')
  })
})
