import { describe, expect, it } from 'vitest'
import { getRelativeTimeDescriptor } from './collection'

describe('getRelativeTimeDescriptor', () => {
  it('returns hour descriptor for hour-scale timestamps', () => {
    const now = Date.now()
    const descriptor = getRelativeTimeDescriptor(now - 2 * 3_600_000, now)

    expect(descriptor).toEqual({ label: '2h ago', unit: 'hour', value: 2, isFuture: false })
  })
})
