import { describe, expect, it } from 'vitest'
import { createFocusTrap } from './focusTrap'

describe('createFocusTrap', () => {
  it('returns a focus trap instance with activate and deactivate methods', () => {
    const trap = createFocusTrap(null)
    expect(typeof trap.activate).toBe('function')
    expect(typeof trap.deactivate).toBe('function')
  })
})
