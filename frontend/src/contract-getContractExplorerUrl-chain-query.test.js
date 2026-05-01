import { describe, expect, it } from 'vitest'
import { NETWORK } from './constants'
import { getContractExplorerUrl } from './contract'

describe('getContractExplorerUrl', () => {
  it('includes a chain query parameter in the explorer link', () => {
    expect(getContractExplorerUrl()).toContain('?chain=')
  })

  it('includes the active network as chain query parameter', () => {
    expect(getContractExplorerUrl()).toContain(`?chain=${NETWORK}`)
  })
})
