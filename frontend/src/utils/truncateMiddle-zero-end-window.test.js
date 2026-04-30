import { describe, expect, it } from 'vitest'
import { truncateMiddle } from './strings'

describe('truncateMiddle', () => {
  it('omits trailing segment when end window is zero', () => {
    expect(truncateMiddle('abcdefghijklmnopqrstuvwxyz', 6, 0)).toBe('abcdef…')
  })
})
