import { describe, expect, it } from 'vitest'
import { normalizeHeaderAccount } from './Header'

describe('normalizeHeaderAccount', () => {
  it('returns non-string account values unchanged', () => {
    expect(normalizeHeaderAccount(null)).toBeNull()
  })
})
