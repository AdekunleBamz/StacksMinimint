import { describe, expect, it } from 'vitest'
import constants, { CONTRACT_NAME } from './index.js'

describe('constants default export', () => {
  it('keeps CONTRACT_NAME aligned on default export object', () => {
    expect(constants.CONTRACT_NAME).toBe(CONTRACT_NAME)
  })
})
