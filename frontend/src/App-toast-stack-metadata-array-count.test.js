import { describe, expect, it } from 'vitest'
import { getToastStackMetadata } from './App'

describe('getToastStackMetadata', () => {
  it('returns the exact count when a toast array is provided', () => {
    expect(getToastStackMetadata([{ id: 1 }, { id: 2 }, { id: 3 }])).toEqual({
      count: 3,
      countLabel: '3'
    })
  })
})
