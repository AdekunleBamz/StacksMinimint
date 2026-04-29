import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('stringifies symbol transaction identifiers safely', () => {
    expect(getTxExplorerLinkLabel(Symbol.for('tx-ref'))).toBe('Transaction: Symbol(tx-ref)')
  })
})
