import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('uses fallback label when explorer type casing does not match', () => {
    expect(getExplorerLinkLabel('TXID', 'abc')).toBe('Transaction: abc')
  })
})
