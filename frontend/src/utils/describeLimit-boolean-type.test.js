import { describe, expect, it } from 'vitest'
import { describeLimit } from './collection'

describe('describeLimit', () => {
  it('reports boolean type metadata for boolean values', () => {
    expect(describeLimit(false).valueType).toBe('boolean')
  })
})
