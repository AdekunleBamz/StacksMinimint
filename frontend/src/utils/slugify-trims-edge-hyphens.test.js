import { describe, expect, it } from 'vitest'
import { slugify } from './strings'

describe('slugify', () => {
  it('removes leading and trailing hyphens from output', () => {
    expect(slugify('---Mini Mint---')).toBe('mini-mint')
  })
})
