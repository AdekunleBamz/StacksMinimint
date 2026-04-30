import { describe, expect, it } from 'vitest'
import { formatTokenId } from './format'

describe('formatTokenId', () => {
  it('preserves string token identifiers when prefixing', () => {
    expect(formatTokenId('0042')).toBe('#0042')
  })
})
