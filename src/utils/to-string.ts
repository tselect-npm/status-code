import { StatusCode } from '../constants/status-code';

// `StatusCode` is a numeric enum, so at runtime it holds both directions of the
// mapping: `{ 200: 'OK', OK: 200, ... }`. Indexing it by an arbitrary string is
// therefore meaningful, but not expressible in the enum's own type — the old
// code relied on `suppressImplicitAnyIndexErrors`, which TypeScript 5.5 removed.
// This alias states the runtime shape instead of suppressing the error, and
// changes no behaviour: the lookup and the comparison are exactly as before.
const REVERSE_MAPPED = StatusCode as unknown as Record<string, string | number>;

export function toString(code: StatusCode): string | null {
  return Object.keys(StatusCode).find((key) => REVERSE_MAPPED[key] === code) || null;
}
