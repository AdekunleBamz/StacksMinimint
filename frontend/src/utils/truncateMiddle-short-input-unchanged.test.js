import { describe, expect, it } from 'vitest'
import { truncateMiddle } from './strings'

describe('truncateMiddle', () => {
  it('returns short values without truncation', () => {
    expect(truncateMiddle('short', 4, 2)).toBe('short')
  })
})
