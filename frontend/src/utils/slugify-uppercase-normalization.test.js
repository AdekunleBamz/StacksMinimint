import { describe, expect, it } from 'vitest'
import { slugify } from './strings'

describe('slugify', () => {
  it('normalizes uppercase titles to lowercase slugs', () => {
    expect(slugify('MINI MINT DROP')).toBe('mini-mint-drop')
  })
})
