import { describe, expect, it } from 'vitest'
import { slugify } from './strings'

describe('slugify', () => {
  it('removes accented characters not matched by the word class', () => {
    expect(slugify('Café launch')).toBe('caf-launch')
  })
})
