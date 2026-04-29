import { describe, expect, it } from 'vitest'
import { getTxExplorerLinkLabel } from './contract'

describe('getTxExplorerLinkLabel', () => {
  it('renders transaction label copy for a normal tx id', () => {
    expect(getTxExplorerLinkLabel('0xabc')).toBe('Transaction: 0xabc')
  })
})
