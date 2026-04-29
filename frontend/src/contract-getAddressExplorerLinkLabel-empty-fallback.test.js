import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('returns generic address copy when identifier is empty', () => {
    expect(getAddressExplorerLinkLabel('')).toBe('Open Address in Explorer')
  })
})
