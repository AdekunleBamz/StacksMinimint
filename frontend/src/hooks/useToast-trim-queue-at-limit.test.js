import { describe, expect, it } from 'vitest'
import { trimToastQueue } from './useToast'

describe('trimToastQueue', () => {
  it('keeps all items when queue size exactly matches max', () => {
    const toasts = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const { trimmedToasts, removedToasts } = trimToastQueue(toasts, 3)

    expect(trimmedToasts).toEqual(toasts)
    expect(removedToasts).toEqual([])
  })
})
