import { describe, expect, it } from 'vitest'
import { CONTRACT_ADDRESS, CONTRACT_NAME } from './index.js'

describe('constants core contract target', () => {
  it('keeps core contract address and name populated', () => {
    expect(CONTRACT_ADDRESS.trim().length).toBeGreaterThan(0)
    expect(CONTRACT_NAME.trim().length).toBeGreaterThan(0)
  })
})
