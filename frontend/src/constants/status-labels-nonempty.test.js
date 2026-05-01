import { describe, expect, it } from 'vitest'
import { UNKNOWN_ADDRESS, PENDING_LABEL, FAILED_LABEL } from './index.js'

describe('constants status labels', () => {
  it('keeps default status labels non-empty', () => {
    expect(UNKNOWN_ADDRESS.length).toBeGreaterThan(0)
    expect(PENDING_LABEL.length).toBeGreaterThan(0)
    expect(FAILED_LABEL.length).toBeGreaterThan(0)
  })
})
