import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('rejects insecure http metadata URLs', () => {
    const result = validateTokenURI('http://example.com/meta.json')
    expect(result.isValid).toBe(false)
    expect(result.label).toBe('Upgrade to HTTPS')
  })
})
