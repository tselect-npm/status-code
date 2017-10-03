import { TStatusCode } from '../types/status-code';
import { isStatusCode } from './is-status-code';

export function isXXX(code: TStatusCode, intChar: string): boolean {
  return isStatusCode(code) && code.toString().charAt(0) === intChar;
}