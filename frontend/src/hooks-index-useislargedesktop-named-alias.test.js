import { describe, expect, it } from 'vitest';

import { useIsLargeDesktop } from './hooks';
import { useIsLargeDesktop as useIsLargeDesktopFromModule } from './hooks/useMediaQuery';

describe('hooks index useIsLargeDesktop named alias', () => {
  it('re-exports useIsLargeDesktop from the media query hook module', () => {
    expect(useIsLargeDesktop).toBe(useIsLargeDesktopFromModule);
  });
});
