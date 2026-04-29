import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('renders emoji transaction identifiers in label copy', () => {
    expect(getTxExplorerLinkLabel('tx🔥99')).toBe('Transaction: tx🔥99')
  })
})
