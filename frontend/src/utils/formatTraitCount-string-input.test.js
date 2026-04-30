import { describe, expect, it } from 'vitest'
import { formatTraitCount } from './format'

describe('formatTraitCount', () => {
  it('coerces numeric-string values before labeling', () => {
    expect(formatTraitCount('11')).toBe('11 traits')
  })
})
