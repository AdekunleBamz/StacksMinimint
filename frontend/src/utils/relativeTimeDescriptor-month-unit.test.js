import { describe, expect, it } from 'vitest'
import { getRelativeTimeDescriptor } from './collection'

describe('getRelativeTimeDescriptor', () => {
  it('returns month descriptor for long-running timestamps', () => {
    const now = Date.now()
    const descriptor = getRelativeTimeDescriptor(now - 62 * 86_400_000, now)

    expect(descriptor).toEqual({ label: '2mo ago', unit: 'month', value: 2, isFuture: false })
  })
})
