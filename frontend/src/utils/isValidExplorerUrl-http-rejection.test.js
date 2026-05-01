import { describe, expect, it } from 'vitest'
import { isValidExplorerUrl } from './validators'

describe('isValidExplorerUrl', () => {
  it('rejects non-https explorer links', () => {
    expect(isValidExplorerUrl('http://explorer.stacks.co/txid/abc')).toBe(false)
  })
})
