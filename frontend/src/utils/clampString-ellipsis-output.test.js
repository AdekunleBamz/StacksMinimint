import { describe, expect, it } from 'vitest'
import { clampString } from './strings'

describe('clampString', () => {
  it('appends an ellipsis when truncating long strings', () => {
    expect(clampString('abcdefghij', 5)).toBe('abcde…')
  })
})
