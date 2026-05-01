import { describe, expect, it } from 'vitest'
import { NETWORK } from './constants'
import { getContractExplorerUrl } from './contract'

describe('getContractExplorerUrl', () => {
  it('includes the active network as chain query parameter', () => {
    expect(getContractExplorerUrl()).toContain(`?chain=${NETWORK}`)
  })
})
