import { describe, expect, it } from 'vitest'
import { getContractExplorerUrl } from './contract'

describe('getContractExplorerUrl', () => {
  it('builds links under the txid explorer path', () => {
    expect(getContractExplorerUrl()).toContain('/txid/')
  })
})
