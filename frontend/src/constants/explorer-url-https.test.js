import { describe, expect, it } from 'vitest'
import { HIRO_EXPLORER_URL } from './index.js'

describe('constants explorer URL', () => {
  it('uses an https explorer base URL', () => {
    expect(HIRO_EXPLORER_URL.startsWith('https://')).toBe(true)
  })
})
