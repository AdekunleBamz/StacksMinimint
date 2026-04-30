import { describe, expect, it } from 'vitest'
import { pluralize } from './strings'

describe('pluralize', () => {
  it('returns singular label for count one even with custom plural', () => {
    expect(pluralize(1, 'person', 'people')).toBe('person')
  })
})
