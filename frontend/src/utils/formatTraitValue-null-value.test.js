import { describe, expect, it } from 'vitest'
import { formatTraitValue } from './format'

describe('formatTraitValue', () => {
  it('stringifies null values for display safety', () => {
    expect(formatTraitValue(null)).toBe('null')
  })
})
