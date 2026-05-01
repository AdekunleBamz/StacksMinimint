import { describe, expect, it } from 'vitest';

import { useIsMobile } from './hooks';
import { useIsMobile as useIsMobileFromModule } from './hooks/useMediaQuery';

describe('hooks index useIsMobile named alias', () => {
  it('re-exports useIsMobile from the media query hook module', () => {
    expect(useIsMobile).toBe(useIsMobileFromModule);
  });
});
