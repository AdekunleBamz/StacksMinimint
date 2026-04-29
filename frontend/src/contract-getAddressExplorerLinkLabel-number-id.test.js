import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('stringifies numeric address identifiers', () => {
    expect(getAddressExplorerLinkLabel(404)).toBe('Address: 404')
  })
})
