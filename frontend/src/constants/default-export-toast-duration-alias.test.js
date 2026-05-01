import { describe, expect, it } from 'vitest'
import constants, { TOAST_DURATION } from './index.js'

describe('constants default export', () => {
  it('keeps TOAST_DURATION aligned on default export object', () => {
    expect(constants.TOAST_DURATION).toBe(TOAST_DURATION)
  })
})
