import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('rejects insecure HTTP schemes even when uppercased', () => {
    const result = validateTokenURI('HTTP://example.com/meta.json')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Upgrade to HTTPS')
  })
})
