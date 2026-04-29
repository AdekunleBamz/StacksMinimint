import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('keeps false boolean tx identifiers as visible text', () => {
    expect(getTxExplorerLinkLabel(false)).toBe('Transaction: false')
  })
})
