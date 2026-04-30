import { describe, expect, it } from 'vitest'
import useAsyncDefault, { useAsync } from './useAsync'

describe('useAsync module exports', () => {
  it('keeps default export aligned with named hook export', () => {
    expect(useAsyncDefault).toBe(useAsync)
  })
})
