import { describe, expect, it } from 'vitest'
import { zeroPad } from './strings'

describe('zeroPad', () => {
  it('normalizes negative decimal strings before padding', () => {
    expect(zeroPad('-7.9', 4)).toBe('0007')
  })
})
