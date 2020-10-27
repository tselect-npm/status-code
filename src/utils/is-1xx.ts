import { StatusCode } from '../constants/status-code';
import { isXXX } from './is-xxx';

export function is1xx(code: StatusCode): boolean {
  return isXXX(code, '1');
}
