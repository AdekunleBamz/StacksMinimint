import { describe, expect, it } from 'vitest';

import { usePrefersDarkMode } from './hooks';
import { usePrefersDarkMode as usePrefersDarkModeFromModule } from './hooks/useMediaQuery';

describe('hooks index usePrefersDarkMode named alias', () => {
  it('re-exports usePrefersDarkMode from the media query hook module', () => {
    expect(usePrefersDarkMode).toBe(usePrefersDarkModeFromModule);
  });
});
