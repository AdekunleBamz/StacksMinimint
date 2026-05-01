import { describe, expect, it } from 'vitest'
import { clampString } from './strings'

describe('clampString', () => {
  it('returns empty output for empty inputs', () => {
    expect(clampString('')).toBe('')
  })
})
