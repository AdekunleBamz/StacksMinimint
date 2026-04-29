import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('stringifies symbol addresses safely in labels', () => {
    expect(getAddressExplorerLinkLabel(Symbol.for('wallet'))).toBe('Address: Symbol(wallet)')
  })
})
