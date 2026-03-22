import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('uses a custom fallback when the value is undefined', () => {
    expect(formatLimit(undefined, 'Unlimited')).toBe('Unlimited')
  })
})
