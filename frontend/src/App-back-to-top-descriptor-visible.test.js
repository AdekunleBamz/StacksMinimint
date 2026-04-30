import { describe, expect, it } from 'vitest'
import { getBackToTopControlState } from './App'

describe('getBackToTopControlState', () => {
  it('marks control as visible and focusable after scroll threshold', () => {
    expect(getBackToTopControlState(true)).toEqual({
      isVisible: true,
      dataVisible: 'true',
      ariaHidden: false,
      tabIndex: 0
    })
  })
})
