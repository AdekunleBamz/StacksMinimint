import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('stringifies multi-value array ids with comma separation', () => {
    expect(getTokenExplorerLinkLabel(['a', 'b'])).toBe('Token: a,b')
  })
})
