import { TStatusCode } from '../types/status-code';
import { isErrorStatusCode } from './is-error-status-code';
import { isStatusCode } from './is-status-code';

export function isNonErrorStatusCode(code: TStatusCode): boolean {
  return isStatusCode(code) && !isErrorStatusCode(code);
}