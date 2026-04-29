import { describe, expect, it } from 'vitest'
import { getTokenExplorerLinkLabel } from './contract'

describe('getTokenExplorerLinkLabel', () => {
  it('renders emoji token identifiers in label copy', () => {
    expect(getTokenExplorerLinkLabel('token🔥')).toBe('Token: token🔥')
  })
})
