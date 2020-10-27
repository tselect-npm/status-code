import { StatusCode } from '../constants/status-code';
import { is5xx } from './is-5xx';

export function isServerErrorStatusCode(code: StatusCode): boolean {
  return is5xx(code);
}
