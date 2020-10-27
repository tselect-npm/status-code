import { StatusCode } from '../constants/status-code';
import { isStatusCode } from './is-status-code';

export function isXXX(code: StatusCode, intChar: string): boolean {
  return isStatusCode(code) && code.toString().charAt(0) === intChar;
}
