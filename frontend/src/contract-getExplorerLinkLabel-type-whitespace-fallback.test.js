import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('treats whitespace-padded types as invalid and falls back safely', () => {
    expect(getExplorerLinkLabel(' txid ', 'abc')).toBe('Transaction: abc')
  })
})
