import { describe, expect, it } from 'vitest'
import { formatTokenId } from './format'

describe('formatTokenId', () => {
  it('stringifies boolean token ids with hash prefix', () => {
    expect(formatTokenId(false)).toBe('#false')
  })
})
