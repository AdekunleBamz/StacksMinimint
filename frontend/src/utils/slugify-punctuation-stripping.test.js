import { describe, expect, it } from 'vitest'
import { slugify } from './strings'

describe('slugify', () => {
  it('strips punctuation and normalizes separators', () => {
    expect(slugify('Mini Mint! v2')).toBe('mini-mint-v2')
  })
})
