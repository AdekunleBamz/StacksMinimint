import { describe, expect, it } from 'vitest'
import { getNetworkLabel, MAINNET_LABEL, TESTNET_LABEL } from './index.js'

describe('getNetworkLabel', () => {
  it('returns one of the supported network labels', () => {
    expect([MAINNET_LABEL, TESTNET_LABEL]).toContain(getNetworkLabel())
  })
})
