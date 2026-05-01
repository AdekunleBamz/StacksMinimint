import { describe, expect, it } from 'vitest'
import { slugify } from './strings'

describe('slugify', () => {
  it('collapses mixed spaces and underscores into single dashes', () => {
    expect(slugify('mini___mint   launch')).toBe('mini-mint-launch')
  })
})
