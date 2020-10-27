import { StatusCode } from '../constants/status-code';
import { isStatusCode } from './is-status-code';

export function isErrorStatusCode(code: StatusCode): boolean {
  return isStatusCode(code) && code >= 400;
}
