import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('renders NaN as explicit token label text', () => {
    expect(getTokenExplorerLinkLabel(Number.NaN)).toBe('Token: NaN')
  })
})
