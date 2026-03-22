import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('normalizes numeric strings with leading zeros', () => {
    expect(formatSTX('000001000000')).toBe('1')
  })
})
