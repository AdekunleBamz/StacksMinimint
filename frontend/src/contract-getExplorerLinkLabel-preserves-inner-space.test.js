import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('preserves internal whitespace inside identifiers', () => {
    expect(getExplorerLinkLabel('txid', 'id one two')).toBe('Transaction: id one two')
  })
})
