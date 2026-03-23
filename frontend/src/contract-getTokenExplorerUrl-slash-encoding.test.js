import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('encodes slashes in token identifiers', () => {
    expect(getTokenExplorerUrl('set/1')).toBe('https://explorer.hiro.so/token/set%2F1?chain=mainnet')
  })
})
