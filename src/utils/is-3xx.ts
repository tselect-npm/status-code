import { StatusCode } from '../constants/status-code';
import { isXXX } from './is-xxx';

export function is3xx(code: StatusCode): boolean {
  return isXXX(code, '3');
}
