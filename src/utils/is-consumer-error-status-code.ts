import { is4xx } from './is-4xx';
import { StatusCode } from '../constants/status-code';

export function isConsumerErrorStatusCode(code: StatusCode): boolean {
  return is4xx(code);
}