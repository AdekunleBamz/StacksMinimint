import { describe, expect, it } from 'vitest'
import { describeLimit } from './collection'

describe('describeLimit', () => {
  it('marks null and undefined values with empty valueType', () => {
    expect(describeLimit(null).valueType).toBe('empty')
    expect(describeLimit(undefined).valueType).toBe('empty')
  })
})
