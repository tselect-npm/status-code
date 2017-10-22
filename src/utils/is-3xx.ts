import { isXXX } from './is-xxx';
import { StatusCode } from '../constants/status-code';

export function is3xx(code: StatusCode): boolean {
  return isXXX(code, '3');
}