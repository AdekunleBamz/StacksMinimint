import { describe, expect, it } from 'vitest'
import { isValidExplorerUrl } from './validators'

describe('isValidExplorerUrl', () => {
  it('accepts uppercase HTTPS scheme values', () => {
    expect(isValidExplorerUrl('HTTPS://explorer.stacks.co/txid/abc')).toBe(true)
  })
})
