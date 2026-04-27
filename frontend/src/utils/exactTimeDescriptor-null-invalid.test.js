import { describe, expect, it } from 'vitest'
import { getExactTimeDescriptor } from './collection'

describe('getExactTimeDescriptor', () => {
  it('returns unknown descriptor when timestamp is null', () => {
    expect(getExactTimeDescriptor(null)).toEqual({ label: 'Unknown time', iso: null, isValid: false })
  })
})
