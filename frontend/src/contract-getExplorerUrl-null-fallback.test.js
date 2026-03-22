import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('falls back to chain root when tx id is null', () => {
    expect(getExplorerUrl(null)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
