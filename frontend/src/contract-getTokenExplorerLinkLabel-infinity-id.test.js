import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('renders Infinity as explicit token label text', () => {
    expect(getTokenExplorerLinkLabel(Number.POSITIVE_INFINITY)).toBe('Token: Infinity')
  })
})
