import { describe, expect, it } from 'vitest'
import { normalizeToastMessage, normalizeToastType } from './useToast'

describe('useToast helpers', () => {
  it('trims leading and trailing whitespace from toast messages', () => {
    expect(normalizeToastMessage('  Mint submitted  ')).toBe('Mint submitted')
  })

  it('normalizes unknown toast types back to info', () => {
    expect(normalizeToastType('success')).toBe('success')
    expect(normalizeToastType('celebration')).toBe('info')
  })
})
