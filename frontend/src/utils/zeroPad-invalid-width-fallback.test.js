import { describe, expect, it } from 'vitest'
import { zeroPad } from './strings'

describe('zeroPad', () => {
  it('falls back to the default width for invalid length values', () => {
    expect(zeroPad(9, 0)).toBe('09')
  })
})
