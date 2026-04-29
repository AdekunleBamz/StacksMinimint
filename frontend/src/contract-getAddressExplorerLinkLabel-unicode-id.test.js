import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('renders unicode addresses correctly in labels', () => {
    expect(getAddressExplorerLinkLabel('адрес-١٢')).toBe('Address: адрес-١٢')
  })
})
