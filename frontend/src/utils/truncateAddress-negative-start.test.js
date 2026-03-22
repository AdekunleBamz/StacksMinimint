import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

describe('truncateAddress', () => {
  it('falls back to defaults when startChars is negative', () => {
    const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    expect(truncateAddress(address, -2, 2)).toBe('SP5K...JT')
  })
})
