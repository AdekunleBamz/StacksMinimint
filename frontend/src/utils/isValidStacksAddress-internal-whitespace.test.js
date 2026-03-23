import { describe, expect, it } from 'vitest'
import { isValidStacksAddress } from './strings'

describe('isValidStacksAddress', () => {
  it('rejects addresses containing internal spaces', () => {
    expect(isValidStacksAddress('SP5K2R HMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT')).toBe(false)
  })
})
