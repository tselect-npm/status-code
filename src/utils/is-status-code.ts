import { map } from '../misc/map';
import { TStatusCode } from '../types/status-code';

export function isStatusCode(value: any): value is TStatusCode {
  return map.has(value);
}