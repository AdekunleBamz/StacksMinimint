import { describe, expect, it } from 'vitest'
import { formatSTX } from './collection'

describe('formatSTX', () => {
  it('treats empty strings as zero microstx', () => {
    expect(formatSTX('')).toBe('0')
  })
})
