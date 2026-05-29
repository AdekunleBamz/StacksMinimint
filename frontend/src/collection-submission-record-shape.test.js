import { describe, expect, it } from 'vitest';
import { createSubmissionRecord } from './utils/collection.js';

describe('createSubmissionRecord shape', () => {
  it('stores the transaction id', () => {
    expect(createSubmissionRecord({ txId: 'tx', tokenURI: 'ipfs://abc', address: 'SP1' }).txId).toBe('tx');
  });
});
