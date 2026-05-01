import { describe, expect, it } from 'vitest'
import { zeroPad } from './strings'

describe('zeroPad', () => {
  it('accepts numeric strings and pads them', () => {
    expect(zeroPad('12', 4)).toBe('0012')
  })
})
