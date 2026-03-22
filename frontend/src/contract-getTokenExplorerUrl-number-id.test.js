import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('supports numeric token identifiers', () => {
    expect(getTokenExplorerUrl(42)).toBe('https://explorer.hiro.so/token/42?chain=mainnet')
  })
})
