import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('preserves internal tab characters in transaction identifiers', () => {
    expect(getTxExplorerLinkLabel('tx\tpart')).toBe('Transaction: tx\tpart')
  })
})
