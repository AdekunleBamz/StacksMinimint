import { describe, expect, it } from 'vitest'
import { validateTokenURI } from './collection'

describe('validateTokenURI', () => {
  it('keeps near-limit state false for short URIs', () => {
    const result = validateTokenURI('https://a.com/meta.json')

    expect(result.isNearLimit).toBe(false)
  })
})
