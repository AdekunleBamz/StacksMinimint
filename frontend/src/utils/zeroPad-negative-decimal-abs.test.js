import { describe, expect, it } from 'vitest'
import { zeroPad } from './strings'

describe('zeroPad', () => {
  it('truncates and pads negative decimal numbers using absolute value', () => {
    expect(zeroPad(-12.9, 4)).toBe('0012')
  })
})
