import { describe, expect, it } from 'vitest'
import { NETWORK, MAINNET_LABEL, TESTNET_LABEL, getNetworkLabel } from './index.js'

describe('constants network labels', () => {
  it('maps current NETWORK value to the corresponding display label', () => {
    const expectedLabel = NETWORK === 'mainnet' ? MAINNET_LABEL : TESTNET_LABEL
    expect(getNetworkLabel()).toBe(expectedLabel)
  })
})
