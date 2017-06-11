export type TCode =
  100 |
  101 |
  200 |
  201 |
  202 |
  203 |
  204 |
  205 |
  206 |
  300 |
  301 |
  302 |
  303 |
  304 |
  305 |
  400 |
  401 |
  402 |
  403 |
  404 |
  405 |
  406 |
  407 |
  408 |
  409 |
  410 |
  412 |
  413 |
  414 |
  415 |
  416 |
  417 |
  500 |
  501 |
  502 |
  503 |
  504 |
  505;

const stringMap = {
  100: 'CONTINUE',
  101: 'SWITCHING_PROTOCOLS',
  200: 'OK',
  201: 'CREATED',
  202: 'ACCEPTED',
  203: 'NON_AUTHORITATIVE_INFORMATION',
  204: 'NO_CONTENT',
  205: 'RESET_CONTENT',
  206: 'PARTIAL_CONTENT',
  300: 'MULTIPLE_CHOICES',
  301: 'MOVED_PERMANENTLY',
  302: 'MOVED_TEMPORARILY',
  303: 'SEE_OTHER',
  304: 'NOT_MODIFIED',
  305: 'USE_PROXY',
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZED',
  402: 'PAYMENT_REQUIRED',
  403: 'FORBIDDEN',
  404: 'NOT_FOUND',
  405: 'METHOD_NOT_ALLOWED',
  406: 'NOT_ACCEPTABLE',
  407: 'PROXY_AUTHENTICATION_REQUIRED',
  408: 'REQUEST_TIME_OUT',
  409: 'CONFLICT',
  410: 'GONE',
  411: 'LENGTH_REQUIRED',
  412: 'PRECONDITION_FAILED',
  413: 'REQUEST_ENTITY_TOO_LARGE',
  414: 'REQUEST_URI_TOO_LONG',
  415: 'UNSUPPORTED_MEDIA_TYPE',
  416: 'REQUEST_RANGE_UNSATISFIABLE',
  417: 'EXPECTATION_FAILED',
  500: 'INTERNAL_SERVER_ERROR',
  501: 'NOT_IMPLEMENTED',
  502: 'BAD_GATEWAY',
  503: 'SERVICE_UNAVAILABLE',
  504: 'GATEWAY_TIME_OUT',
  505: 'HTTP_VERSION_NOT_SUPPORTED',
};

export const CONTINUE = 100;
export const SWITCHING_PROTOCOLS = 101;
export const OK = 200;
export const CREATED = 201;
export const ACCEPTED = 202;
export const NON_AUTHORITATIVE_INFORMATION = 203;
export const NO_CONTENT = 204;
export const RESET_CONTENT = 205;
export const PARTIAL_CONTENT = 206;
export const MULTIPLE_CHOICES = 300;
export const MOVED_PERMANENTLY = 301;
export const MOVED_TEMPORARILY = 302;
export const SEE_OTHER = 303;
export const NOT_MODIFIED = 304;
export const USE_PROXY = 305;
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const PAYMENT_REQUIRED = 402;
export const FORBIDDEN = 403;
export const NOT_FOUND = 404;
export const METHOD_NOT_ALLOWED = 405;
export const NOT_ACCEPTABLE = 406;
export const PROXY_AUTHENTICATION_REQUIRED = 407;
export const REQUEST_TIME_OUT = 408;
export const CONFLICT = 409;
export const GONE = 410;
export const LENGTH_REQUIRED = 411;
export const PRECONDITION_FAILED = 412;
export const REQUEST_ENTITY_TOO_LARGE = 413;
export const REQUEST_URI_TOO_LONG = 414;
export const UNSUPPORTED_MEDIA_TYPE = 415;
export const REQUEST_RANGE_UNSATISFIABLE = 416;
export const EXPECTATION_FAILED = 417;
export const INTERNAL_SERVER_ERROR = 500;
export const NOT_IMPLEMENTED = 501;
export const BAD_GATEWAY = 502;
export const SERVICE_UNAVAILABLE = 503;
export const GATEWAY_TIME_OUT = 504;
export const HTTP_VERSION_NOT_SUPPORTED = 505;

function isXXX(code: TCode, intChar: string): boolean {
  return isStatusCode(code) && code.toString().charAt(0) === intChar;
}

export function is1xx(code: TCode): boolean {
  return isXXX(code, '1');
}

export function is2xx(code: TCode): boolean {
  return isXXX(code, '2');
}

export function is3xx(code: TCode): boolean {
  return isXXX(code, '3');
}

export function is4xx(code: TCode): boolean {
  return isXXX(code, '4');
}

export function is5xx(code: TCode): boolean {
  return isXXX(code, '5');
}

export function isErrorCode(code: TCode): boolean {
  return isStatusCode(code) && code >= 400;
}

export function isServerErrorCode(code: TCode): boolean {
  return is5xx(code);
}

export function isConsumerErrorCode(code: TCode): boolean {
  return is4xx(code);
}

export function isStatusCode(value: any): boolean {
  return value in stringMap;
}

export function toString(code: TCode): string {
  return stringMap[code];
}