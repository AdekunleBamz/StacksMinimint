import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('trims surrounding whitespace before rendering label text', () => {
    expect(getExplorerLinkLabel('txid', '   0xfeed   ')).toBe('Transaction: 0xfeed')
  })
})
