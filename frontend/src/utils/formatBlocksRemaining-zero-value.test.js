import { describe, expect, it } from 'vitest'
import { formatBlocksRemaining } from './format'

describe('formatBlocksRemaining', () => {
  it('formats zero as a valid remaining block count', () => {
    expect(formatBlocksRemaining(0)).toBe('0 blocks')
  })
})
