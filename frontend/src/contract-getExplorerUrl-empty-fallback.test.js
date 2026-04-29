import { describe, expect, it } from 'vitest'
import { getExplorerUrl } from './contract'

describe('getExplorerUrl', () => {
  it('returns the network explorer root when transaction id is empty', () => {
    expect(getExplorerUrl('')).toBe('https://explorer.hiro.so?chain=mainnet')
  })
})
