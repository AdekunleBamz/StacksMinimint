import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('formats negative single-micro values', () => {
    expect(formatSTX(-1)).toBe('-0.000001')
  })
})
