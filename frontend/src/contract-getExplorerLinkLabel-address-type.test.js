import { describe, expect, it } from 'vitest'
import { getExplorerLinkLabel } from './contract'

describe('getExplorerLinkLabel', () => {
  it('renders address label copy for wallet identifiers', () => {
    expect(getExplorerLinkLabel('address', 'SP123ABC')).toBe('Address: SP123ABC')
  })
})
