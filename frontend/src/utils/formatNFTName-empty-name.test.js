import { describe, expect, it } from 'vitest'
import { formatNFTName } from './format'

describe('formatNFTName', () => {
  it('still formats ids when nft name is empty', () => {
    expect(formatNFTName('', 5)).toBe(' #5')
  })

  it('still appends the token id when name is empty', () => {
    expect(formatNFTName('', 12)).toBe(' #12')
  })
})
