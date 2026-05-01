import { describe, expect, it } from 'vitest'
import { formatTxStatus } from './format'

describe('formatTxStatus', () => {
  it('preserves uppercase status words', () => {
    expect(formatTxStatus('SUCCESS')).toBe('SUCCESS')
  })
})
