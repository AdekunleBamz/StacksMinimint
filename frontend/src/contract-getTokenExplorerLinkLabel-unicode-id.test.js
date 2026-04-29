import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('renders unicode token identifiers correctly', () => {
    expect(getTokenExplorerLinkLabel('トークン-٧')).toBe('Token: トークン-٧')
  })
})
