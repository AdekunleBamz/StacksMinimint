import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('falls back to object stringification for tx identifier objects', () => {
    expect(getTxExplorerLinkLabel({ tx: 'id' })).toBe('Transaction: [object Object]')
  })
})
