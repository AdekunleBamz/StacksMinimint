import { describe, expect, it } from 'vitest'
import { formatWhitelistWindow } from './format'

describe('formatWhitelistWindow', () => {
  it('coerces numeric string boundaries before formatting', () => {
    expect(formatWhitelistWindow('10', '25')).toBe('WL 10-25')
  })
})
