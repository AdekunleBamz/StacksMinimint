import { describe, expect, it } from 'vitest'
import { normalizeExactTimestamp } from './collection'

describe('normalizeExactTimestamp', () => {
  it('keeps millisecond timestamps unchanged', () => {
    expect(normalizeExactTimestamp(1700000000000)).toBe(1700000000000)
  })
})
