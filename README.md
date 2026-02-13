# tango-uuid-generator

A lightweight, dependency-free **RFC4122 v4 UUID generator and validator** for **TypeScript-first** projects.

`tango-uuid-generator` provides a small, explicit API for generating, validating, and working with UUIDs across modern JavaScript environments. It is intentionally minimal, predictable, and easy to reason about.

---

## ✨ Features

- **RFC4122 v4 UUIDs only**
  - Explicitly scoped to version 4
  - No namespaced or time-based UUIDs

- **Tiered randomness sources**
  - `crypto.randomUUID()` (preferred)
  - `crypto.getRandomValues()`
  - `Math.random()` fallback

- **Environment-agnostic**
  - Works in browsers
  - Works in Node
  - Works anywhere Web Crypto (or Math.random) is available

- **TypeScript-first**
  - Strong typings
  - Clear function contracts
  - No globals required by consumers

- **Zero runtime dependencies**

- **Explicit empty UUID sentinel**
  - No magic values
  - No implicit defaults

---

## 📦 Installation

```bash
npm install tango-uuid-generator
```

---

## 🚀 Quick Start

```ts
import {
  generateUuid,
  generateMultipleUuids,
  generateEmptyUuid,
  isValidUuid,
  isEmptyUuid
} from 'tango-uuid-generator';

const id = generateUuid();

isValidUuid(id);                    // true
isValidUuid(generateEmptyUuid());   // false
```

---

## 🧪 Examples

### Example 1 — Generate a UUID

```ts
const uuid = generateUuid();
```

- Always returns a **valid, non-empty RFC4122 v4 UUID**
- Never returns the empty UUID

---

### Example 2 — Generate Multiple UUIDs

```ts
const uuids = generateMultipleUuids(5);
```

- Returns an array of exactly `count` UUIDs
- Each UUID is valid, non-empty, and v4

Passing a negative value throws:

```ts
generateMultipleUuids(-1); // Error
```

---

### Example 3 — Empty UUID Sentinel

```ts
const empty = generateEmptyUuid();
// "00000000-0000-0000-0000-000000000000"
```

This value is:
- Explicit
- Stable
- Intentionally invalid as a v4 UUID

---

### Example 4 — Validation

```ts
isValidUuid('550e8400-e29b-41d4-a716-446655440000'); // true
isEmptyUuid('00000000-0000-0000-0000-000000000000'); // true
isValidUuid('not-a-uuid'); // false
```

---

## 📚 Public API

`tango-uuid-generator` exposes **5 functions**.

---

### Generation

#### `generateUuid(): string`

- Generates a **non-empty RFC4122 v4 UUID**
- Uses the strongest available randomness source
- Never throws

---

#### `generateMultipleUuids(count: number): string[]`

- Generates `count` UUIDs
- `count` must be a non-negative number
- Throws if `count < 0`

---

#### `generateEmptyUuid(): string`

- Returns the all-zero UUID:
  ```
  00000000-0000-0000-0000-000000000000
  ```
- Intended as an explicit sentinel value

---

### Validation

#### `isValidUuid(uuid: string): boolean`

- Returns `true` only if:
  - The value is RFC4122 v4
  - The value is **not** the empty UUID

---

#### `isEmptyUuid(uuid: string): boolean`

- Returns `true` only if the UUID is the all-zero sentinel

---

## 🧠 Generation Model

UUID generation follows a strict preference order:

1. `crypto.randomUUID()`  
2. `crypto.getRandomValues()`  
3. `Math.random()`

The **best available entropy source** is always used at runtime.

This design ensures:
- Maximum correctness where possible
- Broad compatibility where necessary

---

## 🎯 Design Philosophy

`tango-uuid-generator` is intentionally minimal.

- TypeScript-first
- Explicit API over clever abstractions
- No external dependencies
- Predictable, testable behavior
- Strictly scoped to RFC4122 v4
