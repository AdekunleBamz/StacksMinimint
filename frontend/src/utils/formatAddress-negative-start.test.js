import { describe, expect, it } from 'vitest'
import { formatAddress } from './collection'

describe('formatAddress', () => {
  it('falls back to default leading length for invalid start values', () => {
    const address = 'SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT'
    expect(formatAddress(address, -1, 2)).toBe('SP5K2...JT')
  })
})
