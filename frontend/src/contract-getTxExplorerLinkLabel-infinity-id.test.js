import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('renders Infinity as explicit transaction label text', () => {
    expect(getTxExplorerLinkLabel(Number.POSITIVE_INFINITY)).toBe('Transaction: Infinity')
  })
})
