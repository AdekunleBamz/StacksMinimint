import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('supports bigint transaction identifiers', () => {
    expect(getTxExplorerLinkLabel(1234567890123456789n)).toBe('Transaction: 1234567890123456789')
  })
})
