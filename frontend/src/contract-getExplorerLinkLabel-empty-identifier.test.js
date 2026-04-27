import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('returns generic explorer copy when identifier is missing', () => {
    expect(getExplorerLinkLabel('address', '')).toBe('Open Address in Explorer')
  })
})
