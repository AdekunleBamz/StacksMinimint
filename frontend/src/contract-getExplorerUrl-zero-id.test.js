import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('supports zero as a transaction identifier', () => {
    expect(getExplorerUrl(0)).toBe('https://explorer.hiro.so/txid/0?chain=mainnet')
  })
})
