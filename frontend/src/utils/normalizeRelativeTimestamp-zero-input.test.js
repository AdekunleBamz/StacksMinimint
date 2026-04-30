import { describe, expect, it } from 'vitest'
import { normalizeRelativeTimestamp } from './collection'

describe('normalizeRelativeTimestamp', () => {
  it('keeps zero timestamps normalized to zero milliseconds', () => {
    expect(normalizeRelativeTimestamp(0)).toBe(0)
  })
})
