import { describe, expect, it } from 'vitest'
import useClipboardDefault, { useClipboard } from './useClipboard'

describe('useClipboard module exports', () => {
  it('keeps default export aligned with named hook export', () => {
    expect(useClipboardDefault).toBe(useClipboard)
  })
})
