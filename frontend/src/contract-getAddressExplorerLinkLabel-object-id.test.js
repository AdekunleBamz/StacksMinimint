import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('coerces object addresses using default string conversion', () => {
    expect(getAddressExplorerLinkLabel({ address: 'SP1' })).toBe('Address: [object Object]')
  })
})
