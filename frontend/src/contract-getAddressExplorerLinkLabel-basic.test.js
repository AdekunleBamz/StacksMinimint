import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('renders address label copy for standard wallet addresses', () => {
    expect(getAddressExplorerLinkLabel('SP3ABC')).toBe('Address: SP3ABC')
  })
})
