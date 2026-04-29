import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('keeps numeric zero identifiers instead of using fallback copy', () => {
    expect(getExplorerLinkLabel('token', 0)).toBe('Token: 0')
  })
})
