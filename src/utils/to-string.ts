import { StatusCode } from '../constants/status-code';

export function toString(code: StatusCode): string | null {
  return Object.keys(StatusCode).find(key => StatusCode[key] === code) || null;
}
