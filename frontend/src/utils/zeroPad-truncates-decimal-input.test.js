import { describe, expect, it } from 'vitest'
import { zeroPad } from './strings'

describe('zeroPad', () => {
  it('truncates decimal values before padding', () => {
    expect(zeroPad(4.9, 3)).toBe('004')
  })
})
