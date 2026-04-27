import { describe, expect, it } from 'vitest'
import { getAddressExplorerLinkLabel } from './contract'

describe('getAddressExplorerLinkLabel', () => {
  it('trims address values before composing label copy', () => {
    expect(getAddressExplorerLinkLabel('  SP123  ')).toBe('Address: SP123')
  })
})
