import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('renders true boolean identifiers for address labels', () => {
    expect(getAddressExplorerLinkLabel(true)).toBe('Address: true')
  })
})
