import { describe, expect, it } from 'vitest'
import { formatOwnerTag } from './format'

describe('formatOwnerTag', () => {
  it('keeps owner label when address is missing', () => {
    expect(formatOwnerTag('')).toBe('Owner: ')
  })
})
