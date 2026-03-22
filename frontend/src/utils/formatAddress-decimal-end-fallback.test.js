import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

describe('formatAddress', () => {
  it('falls back to default end length when a decimal is provided', () => {
    const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    expect(formatAddress(address, 4, 2.5)).toBe('SP5K...X9TJT')
  })
})
