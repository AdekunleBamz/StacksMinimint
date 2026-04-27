import { describe, expect, it } from 'vitest'
import { getToastStackMetadata } from './App'

describe('getToastStackMetadata', () => {
  it('returns zero-count metadata when toast list is not provided', () => {
    expect(getToastStackMetadata(null)).toEqual({
      count: 0,
      countLabel: '0'
    })
  })
})
