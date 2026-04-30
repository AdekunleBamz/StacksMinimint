import { describe, expect, it } from 'vitest'
import { getRecentMintAddress } from './RecentMints'

describe('getRecentMintAddress', () => {
  it('prefers minter address over fallback address field', () => {
    expect(getRecentMintAddress({ minter: 'SPMINTER', address: 'SPADDRESS' })).toBe('SPMINTER')
  })
})
