import { isStatusCode } from './is-status-code';
import { StatusCode } from '../constants/status-code';

export function isXXX(code: StatusCode, intChar: string): boolean {
  return isStatusCode(code) && code.toString().charAt(0) === intChar;
}