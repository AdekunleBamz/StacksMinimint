import { describe, expect, it } from 'vitest'
import { formatCollectionTitle } from './format'

describe('formatCollectionTitle', () => {
  it('trims newline-wrapped collection titles', () => {
    expect(formatCollectionTitle('\nMini Mint\n')).toBe('Mini Mint')
  })
})
