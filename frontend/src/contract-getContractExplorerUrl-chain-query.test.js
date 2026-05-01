import { describe, expect, it } from 'vitest'
import { getContractExplorerUrl } from './contract'

describe('getContractExplorerUrl', () => {
  it('includes a chain query parameter in the explorer link', () => {
    expect(getContractExplorerUrl()).toContain('?chain=')
  })
})
