import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('renders NaN as explicit address label text', () => {
    expect(getAddressExplorerLinkLabel(Number.NaN)).toBe('Address: NaN')
  })
})
