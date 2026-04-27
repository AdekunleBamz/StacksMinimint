import { describe, expect, it } from 'vitest'
import { getRecentMintAddress } from './RecentMints'

describe('getRecentMintAddress', () => {
  it('returns Unknown when address fields are empty', () => {
    expect(getRecentMintAddress({ minter: '   ', address: '' })).toBe('Unknown')
  })
})
