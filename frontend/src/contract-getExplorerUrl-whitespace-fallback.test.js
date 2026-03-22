import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('falls back to the network overview when tx id is whitespace only', () => {
    expect(getExplorerUrl('   ')).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
