import { describe, expect, it } from 'vitest'
import { formatBlocksRemaining } from './format'

describe('formatBlocksRemaining', () => {
  it('formats string block counts without coercion artifacts', () => {
    expect(formatBlocksRemaining('8')).toBe('8 blocks')
  })
})
