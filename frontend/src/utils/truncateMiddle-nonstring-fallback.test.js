import { describe, expect, it } from 'vitest'
import { truncateMiddle } from './strings'

describe('truncateMiddle', () => {
  it('returns empty string for non-string values', () => {
    expect(truncateMiddle(100)).toBe('')
  })
})
