import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('returns the trimmed URI as normalized metadata value', () => {
    const result = validateTokenURI('  https://example.com/meta.json  ')

    expect(result.normalizedValue).toBe('https://example.com/meta.json')
  })
})
