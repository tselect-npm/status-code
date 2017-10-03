import { TStatusCode } from '../types/status-code';
import { isXXX } from './is-xxx';

export function is1xx(code: TStatusCode): boolean {
  return isXXX(code, '1');
}