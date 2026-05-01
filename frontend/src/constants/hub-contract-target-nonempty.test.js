import { describe, expect, it } from 'vitest'
import { HUB_CONTRACT_ADDRESS, HUB_CONTRACT_NAME } from './index.js'

describe('constants hub contract target', () => {
  it('keeps hub contract address and name populated', () => {
    expect(HUB_CONTRACT_ADDRESS.trim().length).toBeGreaterThan(0)
    expect(HUB_CONTRACT_NAME.trim().length).toBeGreaterThan(0)
  })
})
