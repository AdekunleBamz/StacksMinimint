import { describe, expect, it } from 'vitest'
import { truncateMiddle } from './strings'

describe('truncateMiddle', () => {
  it('keeps configured prefix and suffix segments', () => {
    expect(truncateMiddle('SP1234567890', 3, 2)).toBe('SP1…90')
  })
})
