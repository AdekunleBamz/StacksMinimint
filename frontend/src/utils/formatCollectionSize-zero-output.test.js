import { describe, expect, it } from 'vitest'
import { formatCollectionSize } from './format'

describe('formatCollectionSize', () => {
  it('formats zero as a valid item count', () => {
    expect(formatCollectionSize(0)).toBe('0 items')
  })
})
