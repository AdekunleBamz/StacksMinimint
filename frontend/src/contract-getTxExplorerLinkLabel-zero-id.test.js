import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('treats numeric zero as a valid tx identifier', () => {
    expect(getTxExplorerLinkLabel(0)).toBe('Transaction: 0')
  })
})
