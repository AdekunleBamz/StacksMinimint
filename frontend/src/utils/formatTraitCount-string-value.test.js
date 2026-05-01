import { describe, expect, it } from 'vitest'
import { formatTraitCount } from './format'

describe('formatTraitCount', () => {
  it('supports string trait counts in labels', () => {
    expect(formatTraitCount('4')).toBe('4 traits')
  })
})
