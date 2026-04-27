import { describe, expect, it } from 'vitest'
import { getRelativeTimeDescriptor } from './collection'

describe('getRelativeTimeDescriptor', () => {
  it('returns day descriptor for multi-day timestamps', () => {
    const now = Date.now()
    const descriptor = getRelativeTimeDescriptor(now - 3 * 86_400_000, now)

    expect(descriptor).toEqual({ label: '3d ago', unit: 'day', value: 3, isFuture: false })
  })
})
