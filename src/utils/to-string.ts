import { TStatusCode } from '../types/status-code';
import { map } from '../misc/map';

export function toString(code: TStatusCode): string | null {
  return map.get(code) || null;
}