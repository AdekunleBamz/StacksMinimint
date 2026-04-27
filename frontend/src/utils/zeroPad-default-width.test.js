import { describe, expect, it } from 'vitest'
import { zeroPad } from './strings'

describe('zeroPad', () => {
  it('pads numeric values to the default width', () => {
    expect(zeroPad(7)).toBe('07')
  })
})
