import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('renders unicode transaction identifiers correctly', () => {
    expect(getTxExplorerLinkLabel('тх-β')).toBe('Transaction: тх-β')
  })
})
