import { describe, expect, it } from 'vitest'
import { MAINNET_LABEL, TESTNET_LABEL, getNetworkLabel } from './index.js'

describe('constants network labels', () => {
  it('returns a known display label from getNetworkLabel', () => {
    expect([MAINNET_LABEL, TESTNET_LABEL]).toContain(getNetworkLabel())
  })
})
