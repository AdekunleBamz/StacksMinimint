import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('coerces empty array ids to empty string content without fallback', () => {
    expect(getTxExplorerLinkLabel([])).toBe('Transaction: ')
  })
})
