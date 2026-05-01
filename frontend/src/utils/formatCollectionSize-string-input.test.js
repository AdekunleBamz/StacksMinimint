import { describe, expect, it } from 'vitest'
import { formatCollectionSize } from './format'

describe('formatCollectionSize', () => {
  it('keeps string counts readable when formatting item totals', () => {
    expect(formatCollectionSize('1200')).toBe('1200 items')
  })
})
