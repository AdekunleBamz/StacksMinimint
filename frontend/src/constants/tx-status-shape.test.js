import { describe, expect, it } from 'vitest'
import { TX_STATUS } from './index.js'

describe('constants transaction status codes', () => {
  it('defines expected transaction status keys and values', () => {
    expect(TX_STATUS).toEqual({
      PENDING: 'pending',
      SUCCESS: 'success',
      FAILED: 'failed',
      CANCELLED: 'cancelled'
    })
  })
})
