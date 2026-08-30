import { describe, expect, it } from 'vitest';

import {
  is1xx,
  is2xx,
  is3xx,
  is4xx,
  is5xx,
  isConsumerErrorStatusCode,
  isErrorStatusCode,
  isNonErrorStatusCode,
  isServerErrorStatusCode,
  isStatusCode,
  StatusCode,
  // Imported under its real name; see the reasoning at the declaration in
  // src/utils/to-string.ts.
  // biome-ignore lint/suspicious/noShadowRestrictedNames: published export name, see above
  toString,
} from '../src';

describe('StatusCode', () => {
  describe('.is1xx()', () => {
    it('should return true', () => {
      expect(is1xx(StatusCode.CONTINUE)).toBe(true);
    });
    it('should return false', () => {
      expect(is1xx(StatusCode.CONFLICT)).toBe(false);
    });
    it('should return false (not a status code)', () => {
      expect(is1xx(1000 as StatusCode)).toBe(false);
    });
  });

  describe('.is2xx()', () => {
    it('should return true', () => {
      expect(is2xx(StatusCode.OK)).toBe(true);
    });
    it('should return false', () => {
      expect(is2xx(StatusCode.CONFLICT)).toBe(false);
    });
    it('should return false (not a status code)', () => {
      expect(is2xx(2000 as StatusCode)).toBe(false);
    });
  });

  describe('.is3xx()', () => {
    it('should return true', () => {
      expect(is3xx(StatusCode.MOVED_PERMANENTLY)).toBe(true);
    });
    it('should return false', () => {
      expect(is3xx(StatusCode.CONFLICT)).toBe(false);
    });
    it('should return false (not a status code)', () => {
      expect(is3xx(3000 as StatusCode)).toBe(false);
    });
  });

  describe('.is4xx()', () => {
    it('should return true', () => {
      expect(is4xx(StatusCode.CONFLICT)).toBe(true);
    });
    it('should return false', () => {
      expect(is4xx(StatusCode.INTERNAL_SERVER_ERROR)).toBe(false);
    });
    it('should return false (not a status code)', () => {
      expect(is4xx(4000 as StatusCode)).toBe(false);
    });
  });

  describe('.is5xx()', () => {
    it('should return true', () => {
      expect(is5xx(StatusCode.INTERNAL_SERVER_ERROR)).toBe(true);
    });
    it('should return false', () => {
      expect(is5xx(StatusCode.CONFLICT)).toBe(false);
    });
    it('should return false (not a status code)', () => {
      expect(is5xx(5000 as StatusCode)).toBe(false);
    });
  });

  describe('.isStatusCode()', () => {
    it('should return true', () => {
      expect(isStatusCode(200)).toBe(true);
    });
    it('should return false', () => {
      expect(isStatusCode(2000)).toBe(false);
    });

    // Pinned, not endorsed. `StatusCode` is a numeric enum, so its runtime object
    // carries a reverse mapping — `Object.values` yields the 43 member *names* as
    // well as the 43 numbers, and the guard accepts either. This has been true
    // since 1.0.0 and consumers may depend on it, so the modernization preserves
    // it rather than silently changing a type guard's answers. See the README.
    it('should return true for an enum member name (reverse mapping)', () => {
      expect(isStatusCode('OK')).toBe(true);
      expect(isStatusCode('CONFLICT')).toBe(true);
    });
    it('should return false for a string that is not a member name', () => {
      expect(isStatusCode('nope')).toBe(false);
      expect(isStatusCode('200')).toBe(false);
    });
  });

  describe('.isErrorStatusCode()', () => {
    it('should return true', () => {
      expect(isErrorStatusCode(StatusCode.CONFLICT)).toBe(true);
    });
    it('should return false', () => {
      expect(isErrorStatusCode(StatusCode.OK)).toBe(false);
    });
    it('should return false (not a status code)', () => {
      expect(isErrorStatusCode(4000 as StatusCode)).toBe(false);
    });
  });

  describe('.isNonErrorStatusCode()', () => {
    it('should return true', () => {
      expect(isNonErrorStatusCode(StatusCode.OK)).toBe(true);
    });
    it('should return false', () => {
      expect(isNonErrorStatusCode(StatusCode.BAD_REQUEST)).toBe(false);
    });
    it('should return false (not a status code)', () => {
      expect(isNonErrorStatusCode(4000 as StatusCode)).toBe(false);
    });
  });

  describe('.isServerErrorStatusCode()', () => {
    it('should return true', () => {
      expect(isServerErrorStatusCode(StatusCode.INTERNAL_SERVER_ERROR)).toBe(true);
    });
    it('should return false', () => {
      expect(isServerErrorStatusCode(StatusCode.CONFLICT)).toBe(false);
    });
    it('should return false (not a status code)', () => {
      expect(isServerErrorStatusCode(5000 as StatusCode)).toBe(false);
    });
  });

  describe('.isConsumerErrorStatusCode()', () => {
    it('should return true', () => {
      expect(isConsumerErrorStatusCode(StatusCode.CONFLICT)).toBe(true);
    });
    it('should return false', () => {
      expect(isConsumerErrorStatusCode(StatusCode.INTERNAL_SERVER_ERROR)).toBe(false);
    });
    it('should return false (not a status code)', () => {
      expect(isConsumerErrorStatusCode(4000 as StatusCode)).toBe(false);
    });
  });

  describe('.toString()', () => {
    it('should return the string version of the code', () => {
      expect(toString(StatusCode.CONFLICT)).toBe('CONFLICT');
    });

    // The `|| null` fallback — the one branch the inherited suite never reached,
    // and the whole of the gap below the 95% floor.
    it('should return null for a code outside the enum', () => {
      expect(toString(9999 as StatusCode)).toBe(null);
    });

    // Same reverse mapping as `isStatusCode` above: looking up a member name
    // finds the numeric key first, so the answer is the code as a string.
    it('should return the numeric key for an enum member name (reverse mapping)', () => {
      expect(toString('OK' as unknown as StatusCode)).toBe('200');
    });
  });
});
