import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('renders false boolean identifiers without treating them as empty', () => {
    expect(getExplorerLinkLabel('address', false)).toBe('Address: false')
  })
})
