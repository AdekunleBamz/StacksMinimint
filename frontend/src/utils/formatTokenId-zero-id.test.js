import { describe, expect, it } from 'vitest'
import { formatTokenId } from './format'

describe('formatTokenId', () => {
  it('formats zero token ids with the hash prefix', () => {
    expect(formatTokenId(0)).toBe('#0')
  })
})
