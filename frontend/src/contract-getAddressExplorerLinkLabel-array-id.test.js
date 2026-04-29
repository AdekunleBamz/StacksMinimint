import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('stringifies multi-value array ids with comma separation', () => {
    expect(getAddressExplorerLinkLabel(['a', 'b'])).toBe('Address: a,b')
  })
})
