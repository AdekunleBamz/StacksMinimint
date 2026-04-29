import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('trims non-breaking space padding around identifiers', () => {
    expect(getExplorerLinkLabel('address', '\u00A0SP123\u00A0')).toBe('Address: SP123')
  })
})
