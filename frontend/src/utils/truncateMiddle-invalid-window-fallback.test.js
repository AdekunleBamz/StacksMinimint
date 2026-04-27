import { describe, expect, it } from 'vitest'
import { truncateMiddle } from './strings'

describe('truncateMiddle', () => {
  it('falls back to default window sizes for invalid segment counts', () => {
    expect(truncateMiddle('SP1234567890XYZ', -2, null)).toBe('SP1234…0XYZ')
  })
})
