import { describe, expect, it } from 'vitest'
import { pluralize } from './strings'

describe('pluralize', () => {
  it('uses custom plural forms when provided', () => {
    expect(pluralize(2, 'analysis', 'analyses')).toBe('analyses')
  })
})
