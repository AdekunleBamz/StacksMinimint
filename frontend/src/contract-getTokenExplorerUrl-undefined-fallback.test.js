import { describe, expect, it } from 'vitest'
import { getTokenExplorerUrl } from './contract'

describe('getTokenExplorerUrl', () => {
  it('falls back to explorer home for undefined token ids', () => {
    expect(getTokenExplorerUrl(undefined)).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
