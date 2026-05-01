import { describe, expect, it } from 'vitest'
import { pluralize } from './strings'

describe('pluralize', () => {
  it('uses provided custom plural form for zero counts', () => {
    expect(pluralize(0, 'analysis', 'analyses')).toBe('analyses')
  })
})
