import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('trims surrounding spaces before encoding transaction ids', () => {
    expect(getExplorerUrl(' 0xabc123 ')).toBe('https://explorer.hiro.so/txid/0xabc123?chain=mainnet')
  })
})
