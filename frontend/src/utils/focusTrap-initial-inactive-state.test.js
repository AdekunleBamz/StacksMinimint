import { describe, expect, it } from 'vitest'
import { createFocusTrap } from './focusTrap'

describe('createFocusTrap', () => {
  it('starts in an inactive state before activation', () => {
    const trap = createFocusTrap(null)
    expect(trap.isActive).toBe(false)
  })
})
