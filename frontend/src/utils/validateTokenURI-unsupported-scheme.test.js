import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('flags unsupported URI schemes', () => {
    const result = validateTokenURI('ftp://example.com/meta.json')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Unsupported scheme')
  })
})
