import { TStatusCode } from '../types/status-code';
import { is4xx } from './is-4xx';

export function isConsumerErrorStatusCode(code: TStatusCode): boolean {
  return is4xx(code);
}