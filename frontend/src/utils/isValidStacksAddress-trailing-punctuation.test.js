import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

describe('isValidStacksAddress', () => {
  it('rejects addresses with trailing punctuation', () => {
    expect(isValidStacksAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT.')).toBe(false)
  })
})
