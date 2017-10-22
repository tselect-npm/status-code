import { StatusCode } from '../constants/status-code';

export function isStatusCode(value: any): value is StatusCode {
  return Object.values(StatusCode).includes(value);
}