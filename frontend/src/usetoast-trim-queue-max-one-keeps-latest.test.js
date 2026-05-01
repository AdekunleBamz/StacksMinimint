import { describe, expect, it } from 'vitest';

import { trimToastQueue } from './hooks/useToast';

describe('trimToastQueue max-one behavior', () => {
  it('keeps only the latest toast when max is one', () => {
    const toasts = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const { trimmedToasts } = trimToastQueue(toasts, 1);
    expect(trimmedToasts).toEqual([{ id: 3 }]);
  });
});
