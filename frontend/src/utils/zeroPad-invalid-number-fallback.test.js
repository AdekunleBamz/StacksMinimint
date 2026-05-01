import { describe, expect, it } from 'vitest'
import { zeroPad } from './strings'

describe('zeroPad', () => {
  it('falls back to zero when number coercion fails', () => {
    expect(zeroPad('not-a-number', 3)).toBe('000')
  })
})
