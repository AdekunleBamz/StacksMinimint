import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('renders unicode identifiers without mangling characters', () => {
    expect(getExplorerLinkLabel('token', 'トークン-δ')).toBe('Token: トークン-δ')
  })
})
