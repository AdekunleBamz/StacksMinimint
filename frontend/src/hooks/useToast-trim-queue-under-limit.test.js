import { describe, expect, it } from 'vitest'
import { trimToastQueue } from './useToast'

describe('trimToastQueue', () => {
  it('returns original queue when count is within configured max', () => {
    const toasts = [{ id: 1 }, { id: 2 }]
    const { trimmedToasts, removedToasts } = trimToastQueue(toasts, 3)

    expect(trimmedToasts).toEqual(toasts)
    expect(removedToasts).toEqual([])
  })
})
