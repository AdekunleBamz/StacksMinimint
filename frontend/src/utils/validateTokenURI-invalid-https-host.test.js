import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI invalid https host behavior coverage.
describe('validateTokenURI', () => {
  it('rejects invalid HTTPS hosts', () => {
    const result = validateTokenURI('https://')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Invalid metadata URL')
  })
})
