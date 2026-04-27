import { describe, expect, it } from 'vitest'
import { describeLimit } from './collection'

describe('describeLimit', () => {
  it('labels array limits with array valueType and stringified text', () => {
    expect(describeLimit([1, 2])).toEqual({ text: '1,2', isFallback: false, valueType: 'array' })
  })
})
