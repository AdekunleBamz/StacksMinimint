import { describe, expect, it } from 'vitest'
import { clampString } from './strings'

describe('clampString', () => {
  it('returns short strings unchanged', () => {
    expect(clampString('mini', 10)).toBe('mini')
  })
})
