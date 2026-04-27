import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('renders transaction label copy for tx identifiers', () => {
    expect(getExplorerLinkLabel('txid', '0xabc')).toBe('Transaction: 0xabc')
  })
})
