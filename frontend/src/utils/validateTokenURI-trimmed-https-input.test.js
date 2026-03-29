import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI trimmed https input behavior coverage.
describe('validateTokenURI', () => {
  it('accepts secure HTTPS URIs with surrounding whitespace', () => {
    const result = validateTokenURI('  https://example.com/meta.json  ')
    expect(result.isValid).toBe(true)
    expect(result.label).toBe('HTTPS metadata ready')
  })
})
