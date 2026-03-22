import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('builds token explorer links on the configured network', () => {
    expect(getTokenExplorerUrl('123')).toBe('https://explorer.hiro.so/token/123?chain=mainnet')
  })
})
