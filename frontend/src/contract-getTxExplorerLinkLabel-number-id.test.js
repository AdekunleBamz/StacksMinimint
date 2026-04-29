import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('stringifies numeric tx identifiers', () => {
    expect(getTxExplorerLinkLabel(77)).toBe('Transaction: 77')
  })
})
