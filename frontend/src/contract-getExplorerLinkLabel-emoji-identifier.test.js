import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('keeps emoji content when rendering explorer labels', () => {
    expect(getExplorerLinkLabel('address', 'SP🔥123')).toBe('Address: SP🔥123')
  })
})
