import { describe, expect, it } from 'vitest'
import { formatCollectionSize } from './format'

describe('formatCollectionSize', () => {
  it('keeps string counts readable when formatting item totals', () => {
    expect(formatCollectionSize('1200')).toBe('1,200 items')
  })

  it('coerces numeric strings before appending item labels', () => {
    expect(formatCollectionSize('2500')).toBe('2,500 items')
  })
})
