import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('supports bigint address identifiers', () => {
    expect(getAddressExplorerLinkLabel(7800000000000000000n)).toBe('Address: 7800000000000000000')
  })
})
