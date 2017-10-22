import { isStatusCode } from './is-status-code';
import { StatusCode } from '../constants/status-code';

export function isErrorStatusCode(code: StatusCode): boolean {
  return isStatusCode(code) && code >= 400;
}