import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('coerces empty array ids to empty string content without fallback', () => {
    expect(getAddressExplorerLinkLabel([])).toBe('Address: ')
  })
})
