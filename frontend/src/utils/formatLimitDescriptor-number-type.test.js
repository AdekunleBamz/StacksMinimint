import { describe, expect, it } from 'vitest'
import { describeLimit } from './collection'

describe('describeLimit', () => {
  it('returns normalized descriptor for numeric limits', () => {
    expect(describeLimit(12)).toEqual({ text: '12', isFallback: false, valueType: 'number' })
  })
})
