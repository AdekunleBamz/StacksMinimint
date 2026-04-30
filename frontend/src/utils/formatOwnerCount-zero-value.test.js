import { describe, expect, it } from 'vitest'
import { formatOwnerCount } from './format'

describe('formatOwnerCount', () => {
  it('renders zero owner values explicitly', () => {
    expect(formatOwnerCount(0)).toBe('0 owners')
  })
})
