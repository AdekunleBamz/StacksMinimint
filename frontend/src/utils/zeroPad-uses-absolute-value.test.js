import { describe, expect, it } from 'vitest'
import { zeroPad } from './strings'

describe('zeroPad', () => {
  it('normalizes negative values to an absolute padded string', () => {
    expect(zeroPad(-42, 4)).toBe('0042')
  })
})
