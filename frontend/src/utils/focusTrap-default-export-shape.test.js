import { describe, expect, it } from 'vitest'
import focusTrapDefault, { createFocusTrap, trapFocusOnce } from './focusTrap'

describe('focusTrap module exports', () => {
  it('keeps default export methods aligned with named exports', () => {
    expect(focusTrapDefault.createFocusTrap).toBe(createFocusTrap)
    expect(focusTrapDefault.trapFocusOnce).toBe(trapFocusOnce)
  })
})
