import { describe, expect, it } from 'vitest'
import { normalizeToastMessage } from './useToast'

describe('useToast helpers', () => {
  it('trims leading and trailing whitespace from toast messages', () => {
    expect(normalizeToastMessage('  Mint submitted  ')).toBe('Mint submitted')
  })
})
