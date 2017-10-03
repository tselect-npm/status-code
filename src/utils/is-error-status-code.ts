import { TStatusCode } from '../types/status-code';
import { isStatusCode } from './is-status-code';

export function isErrorStatusCode(code: TStatusCode): boolean {
  return isStatusCode(code) && code >= 400;
}