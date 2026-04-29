import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('returns fallback copy for whitespace-only addresses', () => {
    expect(getAddressExplorerLinkLabel('   ')).toBe('Open Address in Explorer')
  })
})
