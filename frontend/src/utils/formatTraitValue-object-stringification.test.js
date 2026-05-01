import { describe, expect, it } from 'vitest'
import { formatTraitValue } from './format'

describe('formatTraitValue', () => {
  it('stringifies object trait values using default conversion', () => {
    expect(formatTraitValue({ rank: 1 })).toBe('[object Object]')
  })
})
