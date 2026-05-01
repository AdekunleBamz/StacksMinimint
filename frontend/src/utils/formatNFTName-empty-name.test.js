import { describe, expect, it } from 'vitest'
import { formatNFTName } from './format'

describe('formatNFTName', () => {
  it('still formats ids when nft name is empty', () => {
    expect(formatNFTName('', 5)).toBe(' #5')
  })
})
