import { describe, expect, it } from 'vitest'
import { pluralize } from './strings'

describe('pluralize', () => {
  it('returns singular form when count is exactly one', () => {
    expect(pluralize(1, 'wallet')).toBe('wallet')
  })
})
