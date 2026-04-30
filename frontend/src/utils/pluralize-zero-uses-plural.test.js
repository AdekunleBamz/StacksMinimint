import { describe, expect, it } from 'vitest'
import { pluralize } from './strings'

describe('pluralize', () => {
  it('uses plural form for zero count', () => {
    expect(pluralize(0, 'mint')).toBe('mints')
  })
})
