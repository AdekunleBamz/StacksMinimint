import { describe, expect, it } from 'vitest';

import { trimToastQueue } from './hooks/useToast';

describe('trimToastQueue exact limit behavior', () => {
  it('keeps removedToasts empty when size equals max', () => {
    const toasts = [{ id: 1 }, { id: 2 }];
    const { removedToasts } = trimToastQueue(toasts, 2);
    expect(removedToasts).toEqual([]);
  });
});
