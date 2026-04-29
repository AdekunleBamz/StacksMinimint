import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('renders true boolean identifiers as string content', () => {
    expect(getExplorerLinkLabel('address', true)).toBe('Address: true')
  })
})
