import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('trims leading and trailing newline characters from identifiers', () => {
    expect(getExplorerLinkLabel('txid', '\nabc\n')).toBe('Transaction: abc')
  })
})
