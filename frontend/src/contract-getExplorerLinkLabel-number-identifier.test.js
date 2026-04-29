import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('stringifies numeric identifiers when building labels', () => {
    expect(getExplorerLinkLabel('txid', 42)).toBe('Transaction: 42')
  })
})
