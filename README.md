# StatusCode

Enums and utilities around status codes.

## Requirements

- `node >= 7.10`
- `typescript >= 2.4`

## Installation

`npm i @bluejay/status-code [--save]`

## Usage

```typescript
import * as StatusCode from '@bluejay/status-code';

StatusCode.is5xx(400); // false
StatusCode.BAD_REQUEST; // 400
```