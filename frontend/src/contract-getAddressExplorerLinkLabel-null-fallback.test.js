import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('returns generic copy when address identifier is null', () => {
    expect(getAddressExplorerLinkLabel(null)).toBe('Open Address in Explorer')
  })
})
