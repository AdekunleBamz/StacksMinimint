import { describe, expect, it } from 'vitest'
import { formatNFTName } from './format'

describe('formatNFTName', () => {
  it('still appends the token id when name is empty', () => {
    expect(formatNFTName('', 12)).toBe(' #12')
  })
})
