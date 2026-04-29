import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('renders Infinity as explicit address label text', () => {
    expect(getAddressExplorerLinkLabel(Number.POSITIVE_INFINITY)).toBe('Address: Infinity')
  })
})
