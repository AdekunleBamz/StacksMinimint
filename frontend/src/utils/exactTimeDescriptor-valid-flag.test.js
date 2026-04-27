import { describe, expect, it } from 'vitest'
import { getExactTimeDescriptor } from './collection'

describe('getExactTimeDescriptor', () => {
  it('sets isValid true for finite timestamps', () => {
    expect(getExactTimeDescriptor(1_700_000_000_000).isValid).toBe(true)
  })
})
