import { describe, expect, it } from 'vitest'
import { getRelativeTimeDescriptor } from './collection'

describe('getRelativeTimeDescriptor', () => {
  it('returns minute descriptor for recent timestamps', () => {
    const now = Date.now()
    const descriptor = getRelativeTimeDescriptor(now - 5 * 60_000, now)

    expect(descriptor).toEqual({ label: '5m ago', unit: 'minute', value: 5, isFuture: false })
  })
})
