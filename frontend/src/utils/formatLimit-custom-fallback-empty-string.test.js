import { describe, expect, it } from 'vitest'
import { formatLimit } from './collection'

describe('formatLimit', () => {
  it('uses a custom fallback for empty strings', () => {
    expect(formatLimit('   ', 'Unlimited')).toBe('Unlimited')
  })
})
