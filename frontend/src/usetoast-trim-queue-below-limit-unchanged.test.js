import { describe, expect, it } from 'vitest';

import { trimToastQueue } from './hooks/useToast';

describe('trimToastQueue below-limit behavior', () => {
  it('keeps all items when queue is below max', () => {
    const toasts = [{ id: 1 }, { id: 2 }];
    const { trimmedToasts } = trimToastQueue(toasts, 3);
    expect(trimmedToasts).toEqual(toasts);
  });
});
