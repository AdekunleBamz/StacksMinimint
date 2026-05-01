import { describe, expect, it } from 'vitest'
import { slugify } from './strings'

describe('slugify', () => {
  it('returns empty string for empty input', () => {
    expect(slugify('')).toBe('')
  })
})
