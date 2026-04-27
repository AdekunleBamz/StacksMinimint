import { describe, expect, it } from 'vitest'
import { getBackToTopControlState } from './App'

describe('getBackToTopControlState', () => {
  it('marks control as hidden and unfocusable before scroll threshold', () => {
    expect(getBackToTopControlState(false)).toEqual({
      isVisible: false,
      dataVisible: 'false',
      ariaHidden: true,
      tabIndex: -1
    })
  })
})
