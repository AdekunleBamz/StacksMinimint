import { describe, expect, it } from 'vitest'
import { CONTRACT_ADDRESS, CONTRACT_NAME } from './constants'
import { getContractExplorerUrl } from './contract'

describe('getContractExplorerUrl', () => {
  it('includes encoded contract address and name target', () => {
    const expectedTarget = encodeURIComponent(`${CONTRACT_ADDRESS}.${CONTRACT_NAME}`)
    expect(getContractExplorerUrl()).toContain(expectedTarget)
  })
})
