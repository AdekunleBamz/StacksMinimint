import { describe, expect, it } from 'vitest'
import { trimToastQueue } from './useToast'

describe('trimToastQueue', () => {
  it('drops all toasts when max capacity is zero', () => {
    const toasts = [{ id: 1 }, { id: 2 }]
    const { trimmedToasts, removedToasts } = trimToastQueue(toasts, 0)

    expect(trimmedToasts).toEqual([])
    expect(removedToasts).toEqual(toasts)
  })
})
