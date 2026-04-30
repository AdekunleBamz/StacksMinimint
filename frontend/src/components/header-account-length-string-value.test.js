import { describe, expect, it } from 'vitest'
import { getHeaderAccountLength } from './Header'

describe('getHeaderAccountLength', () => {
  it('returns the account string length when account is present', () => {
    expect(getHeaderAccountLength('SP12345', true)).toBe(7)
  })
})
