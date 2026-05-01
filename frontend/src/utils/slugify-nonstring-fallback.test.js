import { describe, expect, it } from 'vitest'
import { slugify } from './strings'

describe('slugify', () => {
  it('returns empty string for non-string inputs', () => {
    expect(slugify(42)).toBe('')
  })
})
