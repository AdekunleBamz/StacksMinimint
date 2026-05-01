import { describe, expect, it } from 'vitest'
import { formatOwnerTag } from './format'

describe('formatOwnerTag', () => {
  it('keeps owner address spacing exactly as passed', () => {
    expect(formatOwnerTag(' SP123 ')).toBe('Owner:  SP123 ')
  })
})
