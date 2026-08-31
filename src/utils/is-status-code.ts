import { StatusCode } from '../constants/status-code';

// The parameter is `unknown` rather than `any`: a type guard exists to narrow a
// value nobody has established the type of yet, and `any` defeats that at every
// call site by making the narrowing pointless. This widens what the signature
// accepts, so no existing call stops compiling.
//
// The cast is needed because `Object.values` of a numeric enum is typed
// `(string | StatusCode)[]`, whose `includes` will not take an `unknown`. It
// changes no behaviour — note in particular that the array holds the 43 member
// *names* as well as the 43 numbers, because numeric enums carry a reverse
// mapping, so `isStatusCode('OK')` is `true`. That is the published behaviour
// since 1.0.0 and is pinned by tests.
export function isStatusCode(value: unknown): value is StatusCode {
  return (Object.values(StatusCode) as unknown[]).includes(value);
}
