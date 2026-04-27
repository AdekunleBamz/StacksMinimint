import { describe, expect, it } from 'vitest'
import {
  normalizeToastDuration,
  normalizeToastMessage,
  normalizeToastType,
  trimToastQueue
} from './useToast'

describe('useToast helpers', () => {
  it('trims leading and trailing whitespace from toast messages', () => {
    expect(normalizeToastMessage('  Mint submitted  ')).toBe('Mint submitted')
  })

  it('normalizes unknown toast types back to info', () => {
    expect(normalizeToastType('success')).toBe('success')
    expect(normalizeToastType('celebration')).toBe('info')
  })

  it('clamps negative durations to zero', () => {
    expect(normalizeToastDuration(-200)).toBe(0)
  })

  it('falls back to the provided default for non-finite durations', () => {
    expect(normalizeToastDuration(Number.NaN, 2500)).toBe(2500)
  })

  it('keeps the newest toasts when queue exceeds the configured max', () => {
    const toasts = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    const { trimmedToasts, removedToasts } = trimToastQueue(toasts, 2)

    expect(trimmedToasts).toEqual([{ id: 3 }, { id: 4 }])
    expect(removedToasts).toEqual([{ id: 1 }, { id: 2 }])
  })
})
