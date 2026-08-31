# @tselect/status-code

[![npm](https://img.shields.io/npm/v/@tselect/status-code.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/status-code)
[![npm](https://img.shields.io/npm/dm/@tselect/status-code.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/status-code)
[![CI](https://img.shields.io/github/actions/workflow/status/tselect-npm/status-code/ci.yml?branch=main&style=flat-square)](https://github.com/tselect-npm/status-code/actions/workflows/ci.yml)
[![coverage](https://img.shields.io/coverallsCoverage/github/tselect-npm/status-code?branch=main&style=flat-square)](https://coveralls.io/github/tselect-npm/status-code?branch=main)
[![license](https://img.shields.io/npm/l/@tselect/status-code.svg?style=flat-square)](./LICENSE)

HTTP status codes utility.

Zero runtime dependencies. Ships both ESM and CommonJS builds, with TypeScript types for each.

## Requirements

**Node 22 or newer** (`engines.node` is `>=22`) — every line still receiving security support. Each release is tested on 22, 24 and 26; the declared floor is the lowest version CI actually runs, not a guess.

## Installation

```bash
npm i @tselect/status-code
```

```bash
pnpm add @tselect/status-code
```

## Usage

```typescript
import { is5xx, isStatusCode, StatusCode } from '@tselect/status-code';

StatusCode.OK;                                  // 200
isStatusCode(200);                              // true
is5xx(StatusCode.INTERNAL_SERVER_ERROR);        // true
```

Namespace imports and `require()` both work:

```typescript
import * as StatusCodes from '@tselect/status-code';
```

```javascript
const { StatusCode, is4xx } = require('@tselect/status-code');
```

## API

### `StatusCode`

A numeric enum of 43 HTTP status codes.

```typescript
StatusCode.OK;                    // 200
StatusCode.NOT_FOUND;             // 404
StatusCode.INTERNAL_SERVER_ERROR; // 500
```

| Class | Members |
| --- | --- |
| 1xx | `CONTINUE` `SWITCHING_PROTOCOLS` |
| 2xx | `OK` `CREATED` `ACCEPTED` `NON_AUTHORITATIVE_INFORMATION` `NO_CONTENT` `RESET_CONTENT` `PARTIAL_CONTENT` `MULTI_STATUS` |
| 3xx | `MULTIPLE_CHOICES` `MOVED_PERMANENTLY` `MOVED_TEMPORARILY` `SEE_OTHER` `NOT_MODIFIED` `USE_PROXY` |
| 4xx | `BAD_REQUEST` `UNAUTHORIZED` `PAYMENT_REQUIRED` `FORBIDDEN` `NOT_FOUND` `METHOD_NOT_ALLOWED` `NOT_ACCEPTABLE` `PROXY_AUTHENTICATION_REQUIRED` `REQUEST_TIME_OUT` `CONFLICT` `GONE` `LENGTH_REQUIRED` `PRECONDITION_FAILED` `REQUEST_ENTITY_TOO_LARGE` `REQUEST_URI_TOO_LONG` `UNSUPPORTED_MEDIA_TYPE` `REQUEST_RANGE_UNSATISFIABLE` `EXPECTATION_FAILED` `UNPROCESSABLE_ENTITY` `TOO_MANY_REQUESTS` `UNAVAILABLE_FOR_LEGAL_REASONS` |
| 5xx | `INTERNAL_SERVER_ERROR` `NOT_IMPLEMENTED` `BAD_GATEWAY` `SERVICE_UNAVAILABLE` `GATEWAY_TIME_OUT` `HTTP_VERSION_NOT_SUPPORTED` |

### `isStatusCode(value: unknown): value is StatusCode`

Type guard. Returns `true` when `value` is one of the enum's members.

```typescript
isStatusCode(200);  // true
isStatusCode(2000); // false
```

⚠️ **It also returns `true` for a member's *name*.** `StatusCode` is a numeric enum, so its runtime object carries a reverse mapping and holds the 43 names alongside the 43 numbers:

```typescript
isStatusCode('OK'); // true  — not a typo
```

This has been the behaviour since 1.0.0 and is preserved deliberately. Narrow with `typeof value === 'number' && isStatusCode(value)` if you need numbers only.

### `is1xx(code: StatusCode): boolean`

Returns `true` for an informational status code. Returns `false` for anything that is not a status code at all.

```typescript
is1xx(StatusCode.CONTINUE); // true
is1xx(StatusCode.CONFLICT); // false
is1xx(1000 as StatusCode);  // false
```

### `is2xx(code: StatusCode): boolean`

Returns `true` for a success status code.

```typescript
is2xx(StatusCode.OK);       // true
is2xx(StatusCode.CONFLICT); // false
```

### `is3xx(code: StatusCode): boolean`

Returns `true` for a redirection status code.

```typescript
is3xx(StatusCode.MOVED_PERMANENTLY); // true
is3xx(StatusCode.CONFLICT);          // false
```

### `is4xx(code: StatusCode): boolean`

Returns `true` for a client error status code.

```typescript
is4xx(StatusCode.CONFLICT);              // true
is4xx(StatusCode.INTERNAL_SERVER_ERROR); // false
```

### `is5xx(code: StatusCode): boolean`

Returns `true` for a server error status code.

```typescript
is5xx(StatusCode.INTERNAL_SERVER_ERROR); // true
is5xx(StatusCode.CONFLICT);              // false
```

### `isErrorStatusCode(code: StatusCode): boolean`

Returns `true` for any status code at or above 400, i.e. 4xx and 5xx together.

```typescript
isErrorStatusCode(StatusCode.CONFLICT); // true
isErrorStatusCode(StatusCode.OK);       // false
```

### `isNonErrorStatusCode(code: StatusCode): boolean`

The complement of `isErrorStatusCode` over valid status codes. Note that a value which is not a status code at all is neither, so both return `false` for it.

```typescript
isNonErrorStatusCode(StatusCode.OK);          // true
isNonErrorStatusCode(StatusCode.BAD_REQUEST); // false
isNonErrorStatusCode(4000 as StatusCode);     // false
```

### `isServerErrorStatusCode(code: StatusCode): boolean`

Alias of `is5xx`.

```typescript
isServerErrorStatusCode(StatusCode.INTERNAL_SERVER_ERROR); // true
```

### `isConsumerErrorStatusCode(code: StatusCode): boolean`

Alias of `is4xx`.

```typescript
isConsumerErrorStatusCode(StatusCode.CONFLICT); // true
```

### `toString(code: StatusCode): string | null`

Returns the enum member's name for a code, or `null` when the code is not in the enum.

```typescript
toString(StatusCode.CONFLICT); // 'CONFLICT'
toString(9999 as StatusCode);  // null
```

⚠️ Because of the same reverse mapping described under `isStatusCode`, passing a member *name* returns the code as a string:

```typescript
toString('OK' as unknown as StatusCode); // '200'
```

## License

[MIT](./LICENSE) © Sylvain Estevez
