import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI non ascii behavior coverage.
describe('validateTokenURI', () => {
  it('rejects non-ASCII characters in URI input', () => {
    const result = validateTokenURI('https://example.com/meta-🔥.json')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Unsupported characters')
  })
})
