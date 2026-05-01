import { describe, expect, it } from 'vitest'
import { truncateAddress } from './strings'

describe('truncateAddress', () => {
  it('returns prefix with ellipsis when suffix length is zero', () => {
    expect(truncateAddress('SP5K2RHMSBH4PAP4PGX77MCVNK1ZEED07CWX9TJT', 6, 0)).toBe('SP5K2R...')
  })
})
