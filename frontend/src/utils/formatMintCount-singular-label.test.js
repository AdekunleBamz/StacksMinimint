import { describe, expect, it } from 'vitest'
import { formatMintCount } from './format'

describe('formatMintCount', () => {
  it('uses singular label for one mint', () => {
    expect(formatMintCount(1)).toBe('1 mint')
  })
})
