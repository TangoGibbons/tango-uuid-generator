/*
 * Developed by Tom Gibbons for public use in accordance to the
 * rights of use agreement set forth by the npm Open-Source Terms
 *
 * @author: tgibbons
*/

/*
 * This is a self-contained TypeScript module for generating RFC4122 v4 UUIDs.
 *
 * Design goals:
 * - Small, explicit public API
 * - No external npm dependencies
 * - Predictable behavior for testability
 * - generateUuid() ALWAYS returns a valid, non-empty v4 UUID
 * - generateMultipleUuids(count) ALWAYS returns count number of valid, non-empty v4 UUIDs
 * - generateEmptyUuid() provides an explicit all-zero sentinel value
 * 
 */

// PUBLIC METHOD: generate RFC4122 v4 UUID
export function generateUuid(): string {

  // Use native crypto.randomUUID if available (modern browsers & Node 15.6+)
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  
  // Fallback implementation using crypto.getRandomValues or Math.random, based upon what is available
  let uuid = '';

  let r: Uint8Array;
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    r = crypto.getRandomValues(new Uint8Array(16));
  } else {
    r = new Uint8Array(16);
    for (let i = 0; i < 16; i++) {
      r[i] = Math.floor(Math.random() * 256); // 0–255
    }
  }

  for (let i = 0; i < 16; i++) {
    if (i === 4 || i === 6 || i === 8 || i === 10) {
      uuid += '-';
    }

    let byte = r[i];

    if (i === 6) byte = (byte & 0x0f) | 0x40; // version
    if (i === 8) byte = (byte & 0x3f) | 0x80; // variant

    uuid += byte.toString(16).padStart(2, '0');
  } 

  return uuid;
}


// PUBLIC METHOD: generates count number of RFC4122 v4 UUID
export function generateMultipleUuids(count: number): string[] {
  if (count < 0) {
    throw new Error('Count must be a non-negative number');
  }
  
  return Array.from({ length: count }, () => generateUuid());
}


// PUBLIC METHOD: returns an empty UUID
export function generateEmptyUuid(): string {
  return '00000000-0000-0000-0000-000000000000';
}
