import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('formats negative numeric strings', () => {
    expect(formatSTX('-500000')).toBe('-0.5')
  })
})
