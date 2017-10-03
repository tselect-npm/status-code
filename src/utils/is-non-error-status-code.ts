import { TStatusCode } from '../types/status-code';
import { isErrorStatusCode } from './is-error-status-code';

export function isNonErrorStatusCode(code: TStatusCode): boolean {
  return !isErrorStatusCode(code);
}