import { describe, expect, it } from 'vitest'
import { pluralize } from './strings'

describe('pluralize', () => {
  it('falls back to appending s when custom plural is omitted', () => {
    expect(pluralize(3, 'token')).toBe('tokens')
  })
})
