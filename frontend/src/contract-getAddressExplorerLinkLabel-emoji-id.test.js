import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('renders emoji addresses without dropping characters', () => {
    expect(getAddressExplorerLinkLabel('SP🔥99')).toBe('Address: SP🔥99')
  })
})
