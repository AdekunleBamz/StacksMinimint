import { describe, expect, it } from 'vitest';

import { useIsPortrait } from './hooks';
import { useIsPortrait as useIsPortraitFromModule } from './hooks/useMediaQuery';

describe('hooks index useIsPortrait named alias', () => {
  it('re-exports useIsPortrait from the media query hook module', () => {
    expect(useIsPortrait).toBe(useIsPortraitFromModule);
  });
});
