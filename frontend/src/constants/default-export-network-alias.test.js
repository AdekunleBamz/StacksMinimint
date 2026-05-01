import { describe, expect, it } from 'vitest'
import constants, { NETWORK } from './index.js'

describe('constants default export', () => {
  it('keeps NETWORK value aligned on default export object', () => {
    expect(constants.NETWORK).toBe(NETWORK)
  })
})
