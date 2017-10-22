import { isXXX } from './is-xxx';
import { StatusCode } from '../constants/status-code';

export function is4xx(code: StatusCode): boolean {
  return isXXX(code, '4');
}