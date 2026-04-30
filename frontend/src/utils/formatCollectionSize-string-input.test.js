import { describe, expect, it } from 'vitest'
import { formatCollectionSize } from './format'

describe('formatCollectionSize', () => {
  it('coerces numeric strings before appending item labels', () => {
    expect(formatCollectionSize('2500')).toBe('2,500 items')
  })
})
