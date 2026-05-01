import { describe, expect, it } from 'vitest'
import { formatTraitCount } from './format'

describe('formatTraitCount', () => {
  it('formats zero trait counts', () => {
    expect(formatTraitCount(0)).toBe('0 traits')
  })
})
