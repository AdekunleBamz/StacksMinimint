import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

// Regression note: preserve contract behavior coverage.
// Scope note: validates contract behavior for regressions.
describe('contract explorer helpers', () => {
  it('builds transaction explorer links on the configured network', () => {
    expect(getExplorerUrl('0xabc')).toBe('https://explorer.hiro.so/txid/0xabc?chain=mainnet')
  })

  it('falls back to the chain home URL when tx id is missing', () => {
    expect(getExplorerUrl('')).toBe('https://explorer.hiro.so?chain=mainnet')
  })

  it('encodes transaction ids safely for explorer URLs', () => {
    expect(getExplorerUrl('0xabc/def?x=1')).toBe('https://explorer.hiro.so/txid/0xabc%2Fdef%3Fx%3D1?chain=mainnet')
  })
})
