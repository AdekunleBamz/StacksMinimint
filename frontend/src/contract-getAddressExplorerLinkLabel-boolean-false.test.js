import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('keeps false boolean addresses visible in label output', () => {
    expect(getAddressExplorerLinkLabel(false)).toBe('Address: false')
  })
})
