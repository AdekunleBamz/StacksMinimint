import { describe, expect, it } from 'vitest'
import { clampString } from './strings'

describe('clampString', () => {
  it('returns the original string when length matches the limit', () => {
    expect(clampString('hello', 5)).toBe('hello')
  })
})
