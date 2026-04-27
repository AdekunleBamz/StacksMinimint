import { describe, expect, it } from 'vitest'
import { getExactTimeDescriptor } from './collection'

describe('getExactTimeDescriptor', () => {
  it('returns unknown label for invalid numeric strings', () => {
    expect(getExactTimeDescriptor('not-a-time').label).toBe('Unknown time')
  })
})
