import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('stringifies boolean token identifiers', () => {
    expect(getTokenExplorerUrl(true)).toBe('https://explorer.hiro.so/token/true?chain=mainnet')
  })
})
