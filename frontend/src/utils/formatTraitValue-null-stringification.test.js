import { describe, expect, it } from 'vitest'
import { formatTraitValue } from './format'

describe('formatTraitValue', () => {
  it('stringifies null trait values for display', () => {
    expect(formatTraitValue(null)).toBe('null')
  })
})
