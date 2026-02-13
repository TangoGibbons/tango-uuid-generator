/*
 * Developed by Tom Gibbons for public use in accordance to the
 * rights of use agreement set forth by the npm Open-Source Terms
 *
 * @author: tgibbons
*/
/*
 * This is a self-contained TypeScript module for generating and validating RFC4122 v4 UUIDs.
 *
 * Design goals:
 * - Small, explicit public API
 * - No external npm dependencies
 * - Predictable behavior for testability
 *
 * The project contains three TypeScript files and a test.
 * - index.ts - parent file containing barrell export for ease of client usage
 * - uuid/generate.ts - file containing functions to generate uuids
 * - uuid/validate.ts - file containing functions to validate uuids
 *
 * Within uuid/generate:
 * - generateUuid() ALWAYS returns a valid, non-empty v4 UUID
 * - generateMultipleUuids(count) ALWAYS returns count number of valid, non-empty v4 UUIDs
 * - generateEmptyUuid() provides an explicit all-zero sentinel value
 *
 * Within uuid/validate:
 * - isValidUuid(uuid) - validates if the provided uuid is a non-empty RFC4122 v4 UUID
 * - isEmptyUuid(uuid) - validates if the provided uuid is a empty UUID
 *
 */
export { generateUuid, generateMultipleUuids, generateEmptyUuid } from './uuid/generate.js';
export { isValidUuid, isEmptyUuid } from './uuid/validate.js';
//# sourceMappingURL=index.js.map