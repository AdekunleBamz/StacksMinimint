import { describe, expect, it } from 'vitest'
import { getContractExplorerUrl } from './contract'

describe('getContractExplorerUrl', () => {
  it('includes the minimint core contract identifier in explorer urls', () => {
    expect(getContractExplorerUrl()).toContain('minimint-core-v-i27')
  })
})
