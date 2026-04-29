import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('stringifies symbol identifiers for display text', () => {
    expect(getExplorerLinkLabel('txid', Symbol.for('tx'))).toBe('Transaction: Symbol(tx)')
  })
})
