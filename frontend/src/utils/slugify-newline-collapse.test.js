import { describe, expect, it } from 'vitest'
import { slugify } from './strings'

describe('slugify', () => {
  it('collapses newlines into single dashes', () => {
    expect(slugify('Mini\nMint\nLaunch')).toBe('mini-mint-launch')
  })
})
