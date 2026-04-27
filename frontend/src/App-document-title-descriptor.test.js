import { describe, expect, it } from 'vitest'
import { getAppDocumentTitle } from './App'

describe('getAppDocumentTitle', () => {
  it('returns connected title prefix when wallet is connected', () => {
    expect(getAppDocumentTitle(true)).toContain('Connected - StacksMinimint')
  })
})
