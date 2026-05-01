import { describe, expect, it } from 'vitest'
import { truncateMiddle } from './strings'

describe('truncateMiddle', () => {
  it('trims surrounding whitespace before truncating', () => {
    expect(truncateMiddle('  SP1234567890  ', 3, 2)).toBe('SP1…90')
  })
})
