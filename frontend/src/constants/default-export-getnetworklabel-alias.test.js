import { describe, expect, it } from 'vitest'
import constants, { getNetworkLabel } from './index.js'

describe('constants default export', () => {
  it('keeps getNetworkLabel function aligned on default export object', () => {
    expect(constants.getNetworkLabel).toBe(getNetworkLabel)
  })
})
