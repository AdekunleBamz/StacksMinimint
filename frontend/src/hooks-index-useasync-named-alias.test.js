import { describe, expect, it } from 'vitest';

import { useAsync } from './hooks';
import { useAsync as useAsyncFromModule } from './hooks/useAsync';

describe('hooks index useAsync named alias', () => {
  it('re-exports useAsync from the async hook module', () => {
    expect(useAsync).toBe(useAsyncFromModule);
  });
});
