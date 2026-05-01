import { describe, expect, it } from 'vitest';

import { useIsDesktop } from './hooks';
import { useIsDesktop as useIsDesktopFromModule } from './hooks/useMediaQuery';

describe('hooks index useIsDesktop named alias', () => {
  it('re-exports useIsDesktop from the media query hook module', () => {
    expect(useIsDesktop).toBe(useIsDesktopFromModule);
  });
});
