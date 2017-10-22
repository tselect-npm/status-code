import { isErrorStatusCode } from './is-error-status-code';
import { isStatusCode } from './is-status-code';
import { StatusCode } from '../constants/status-code';

export function isNonErrorStatusCode(code: StatusCode): boolean {
  return isStatusCode(code) && !isErrorStatusCode(code);
}