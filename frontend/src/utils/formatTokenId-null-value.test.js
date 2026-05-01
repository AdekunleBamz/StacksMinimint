import { describe, expect, it } from 'vitest'
import { formatTokenId } from './format'

describe('formatTokenId', () => {
  it('stringifies null token ids with prefix', () => {
    expect(formatTokenId(null)).toBe('#null')
  })
})
