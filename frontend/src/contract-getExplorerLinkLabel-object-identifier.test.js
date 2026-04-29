import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('stringifies object identifiers in a stable way', () => {
    expect(getExplorerLinkLabel('txid', { id: 7 })).toBe('Transaction: [object Object]')
  })
})
