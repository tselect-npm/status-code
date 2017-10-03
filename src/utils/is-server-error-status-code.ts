import { TStatusCode } from '../types/status-code';
import { is5xx } from './is-5xx';

export function isServerErrorStatusCode(code: TStatusCode): boolean {
  return is5xx(code);
}