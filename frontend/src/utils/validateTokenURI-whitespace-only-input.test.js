import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

// Regression note: preserve validateTokenURI whitespace only input behavior coverage.
describe('validateTokenURI', () => {
  it('treats whitespace-only input as missing metadata', () => {
    const result = validateTokenURI('   ')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Metadata required')
  })
})
