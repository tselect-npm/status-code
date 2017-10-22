import { is5xx } from './is-5xx';
import { StatusCode } from '../constants/status-code';

export function isServerErrorStatusCode(code: StatusCode): boolean {
  return is5xx(code);
}