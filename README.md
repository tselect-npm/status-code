# StatusCode

[![npm](https://img.shields.io/npm/v/@tselect/status-code.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/status-code)
 [![npm](https://img.shields.io/npm/dm/@tselect/status-code.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/status-code)
[![npm](https://img.shields.io/npm/l/@tselect/status-code.svg?style=flat-square)](https://www.npmjs.com/package/@tselect/status-code)

Enums and utilities around status codes.

## Installation

`npm i @tselect/status-code`

## Usage

```typescript
import { StatusCode, isStatusCode, is5xx } from '@tselect/status-code';

StatusCode.OK; // 200
isStatusCode(200); // true
is5xx(StatusCode.INTERNAL_SERVER_ERROR); // true
```
