import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('renders NaN as explicit transaction label text', () => {
    expect(getTxExplorerLinkLabel(Number.NaN)).toBe('Transaction: NaN')
  })
})
