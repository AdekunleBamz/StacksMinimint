import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('contract explorer helpers', () => {
  it('builds transaction explorer links on the configured network', () => {
    expect(getExplorerUrl('0xabc')).toBe('https://explorer.hiro.so/txid/0xabc?chain=mainnet')
  })
})
