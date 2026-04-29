import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('stringifies negative numeric transaction identifiers', () => {
    expect(getTxExplorerLinkLabel(-1)).toBe('Transaction: -1')
  })
})
