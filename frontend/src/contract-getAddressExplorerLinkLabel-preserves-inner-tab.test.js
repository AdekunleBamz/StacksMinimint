import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('preserves internal tab characters in address identifiers', () => {
    expect(getAddressExplorerLinkLabel('SP\t001')).toBe('Address: SP\t001')
  })
})
