import { StatusCode } from '../constants/status-code';
import { is4xx } from './is-4xx';

export function isConsumerErrorStatusCode(code: StatusCode): boolean {
  return is4xx(code);
}
