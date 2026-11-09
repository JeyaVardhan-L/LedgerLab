import { describe, it, expect } from 'vitest';
import { createHash } from 'node:crypto';
import { sha256Sync, sha256WebCrypto } from '../../src/crypto/sha256';

const reference = (s: string) => createHash('sha256').update(s, 'utf8').digest('hex');

// Lengths around the 64-byte block and the 55/56-byte padding boundary,
// where hand-written SHA-256 implementations usually break.
const lengths = [0, 1, 54, 55, 56, 57, 63, 64, 65, 119, 120, 127, 128, 1000];

describe('sha256Sync cross-checked against Node crypto', () => {
  it.each(lengths)('matches for a %i-byte ASCII input', (n) => {
    const input = 'a'.repeat(n);
    expect(sha256Sync(input)).toBe(reference(input));
  });

  it('matches for multi-byte UTF-8 input', () => {
    for (const input of ['héllo', 'ブロックチェーン', '🔗⛓️ chain', 'Ω'.repeat(40)]) {
      expect(sha256Sync(input)).toBe(reference(input));
    }
  });

  it('agrees with the Web Crypto wrapper', async () => {
    const input = 'LedgerLab Web Crypto agreement check';
    expect(await sha256WebCrypto(input)).toBe(sha256Sync(input));
  });
});
