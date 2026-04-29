import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('stringifies negative numeric address identifiers', () => {
    expect(getAddressExplorerLinkLabel(-1)).toBe('Address: -1')
  })
})
