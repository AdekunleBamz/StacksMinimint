import { describe, expect, it } from 'vitest'
import { isValidExplorerUrl } from './validators'

describe('isValidExplorerUrl', () => {
  it('accepts uppercase HTTPS schemes', () => {
    expect(isValidExplorerUrl('HTTPS://explorer.stacks.co/txid/123')).toBe(true)
  })
})
