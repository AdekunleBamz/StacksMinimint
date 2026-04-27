import { describe, expect, it } from 'vitest'
import { getRelativeTimeDescriptor } from './collection'

describe('getRelativeTimeDescriptor', () => {
  it('returns now descriptor for null timestamps', () => {
    expect(getRelativeTimeDescriptor(null)).toEqual({ label: 'Just now', unit: 'now', value: 0, isFuture: false })
  })
})
