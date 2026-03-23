import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('supports zero token ids', () => {
    expect(getTokenExplorerUrl(0)).toBe('https://explorer.hiro.so/token/0?chain=mainnet')
  })
})
