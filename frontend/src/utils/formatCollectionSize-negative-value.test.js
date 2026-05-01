import { describe, expect, it } from 'vitest'
import { formatCollectionSize } from './format'

describe('formatCollectionSize', () => {
  it('formats negative values without crashing', () => {
    expect(formatCollectionSize(-50)).toBe('-50 items')
  })
})
