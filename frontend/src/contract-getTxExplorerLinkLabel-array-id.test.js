import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('stringifies multi-value array ids with comma separation', () => {
    expect(getTxExplorerLinkLabel(['a', 'b'])).toBe('Transaction: a,b')
  })
})
