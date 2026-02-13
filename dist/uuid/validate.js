/*
 * Developed by Tom Gibbons for public use in accordance to the
 * rights of use agreement set forth by the npm Open-Source Terms
 *
 * @author: tgibbons
*/
/*
 * This is a self-contained TypeScript module for validating RFC4122 v4 UUIDs.
 *
 * Design goals:
 * - Small, explicit public API
 * - No external npm dependencies
 * - Predictable behavior for testability
 * - isValidUuid(uuid) - validates if the provided uuid is a non-empty RFC4122 v4 UUID
 * - isEmptyUuid(uuid) - validates if the provided uuid is a empty UUID
 *
 */
// PUBLIC METHOD: validate a uuid is a RFC4122 v4 UUID
export function isValidUuid(uuid) {
    if (typeof uuid !== 'string') {
        return false;
    }
    // Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    // where x is any hex digit and y is one of 8, 9, A, or B
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}
// PUBLIC METHOD: validate a uuid is an empty uuid,
export function isEmptyUuid(uuid) {
    return uuid === '00000000-0000-0000-0000-000000000000';
}
//# sourceMappingURL=validate.js.map