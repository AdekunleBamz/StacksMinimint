import { describe, expect, it } from 'vitest'
import { formatTokenId } from './format'

describe('formatTokenId', () => {
  it('keeps string identifiers when prefixing', () => {
    expect(formatTokenId('009')).toBe('#009')
  })
})
