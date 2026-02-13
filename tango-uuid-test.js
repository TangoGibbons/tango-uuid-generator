/**
 * Simple test file to verify tango-uuid-generator works correctly
 * Run this after building: npm run build && node test.js
 */

import {
  generateUuid,
  isValidUuid,
  generateEmptyUuid,
  generateMultipleUuids
} from './dist/index.js';

console.log('🧪 Testing tango-uuid-generator\n');
console.log('='.repeat(50));

// Test 1: Generate single GUID
console.log('\n📝 Test 1: Generate Single GUID');
const uuid1 = generateUuid();
console.log(`Generated: ${uuid1}`);
console.log(`✓ Length: ${uuid1.length === 36 ? 'PASS' : 'FAIL'} (expected 36, got ${uuid1.length})`);

// Test 2: Generate multiple GUIDs
console.log('\n📝 Test 2: Generate Multiple GUIDs');
const uuids = generateMultipleUuids(5);
console.log(`Generated ${uuids.length} GUIDs:`);
uuids.forEach((g, i) => console.log(`  ${i + 1}. ${g}`));
console.log(`✓ Count: ${uuids.length === 5 ? 'PASS' : 'FAIL'} (expected 5, got ${uuids.length})`);

// Test 3: Validate GUIDs
console.log('\n📝 Test 3: Validate GUIDs');
const validUuid = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
const invalidUuid1 = 'not-a-uuid';
const invalidUuid2 = 'f47ac10b-58cc-4372-a567-0e02b2c3d47'; // Too short
const invalidUuid3 = 'f47ac10b-58cc-4372-a567-0e02b2c3d479x'; // Too long

console.log(`Valid GUID: ${isValidUuid(validUuid) ? '✓ PASS' : '✗ FAIL'}`);
console.log(`Invalid (text): ${!isValidUuid(invalidUuid1) ? '✓ PASS' : '✗ FAIL'}`);
console.log(`Invalid (short): ${!isValidUuid(invalidUuid2) ? '✓ PASS' : '✗ FAIL'}`);
console.log(`Invalid (long): ${!isValidUuid(invalidUuid3) ? '✓ PASS' : '✗ FAIL'}`);

// Test 4: Validate generated GUIDs
console.log('\n📝 Test 4: Validate Generated GUIDs');
const testUuid = generateUuid();
console.log(`Generated: ${testUuid}`);
console.log(`Is valid: ${isValidUuid(testUuid) ? '✓ PASS' : '✗ FAIL'}`);

// Test 5: Empty GUID
console.log('\n📝 Test 5: Empty GUID');
const empty = generateEmptyUuid();
console.log(`Empty GUID: ${empty}`);
console.log(`✓ Correct: ${empty === '00000000-0000-0000-0000-000000000000' ? 'PASS' : 'FAIL'}`);

// Test 6: All generated GUIDs are unique
console.log('\n📝 Test 6: Uniqueness Test');
const uniqueTest = generateMultipleUuids(100);
const uniqueSet = new Set(uniqueTest);
console.log(`Generated 100 GUIDs, unique count: ${uniqueSet.size}`);
console.log(`✓ All unique: ${uniqueSet.size === 100 ? 'PASS' : 'FAIL'}`);

// Test 7: Error handling
console.log('\n📝 Test 7: Error Handling');
try {
  generateMultipleUuids(-1);
  console.log('✗ FAIL - Should have thrown error for negative count');
} catch (error) {
  console.log('✓ PASS - Correctly throws error for negative count');
  console.log(`  Error message: "${error.message}"`);
}

// Test 8: Performance test
console.log('\n📝 Test 8: Performance Test');
const startTime = Date.now();
const perfTest = generateMultipleUuids(10000);
const endTime = Date.now();
const duration = endTime - startTime;
console.log(`Generated 10,000 GUIDs in ${duration}ms`);
console.log(`Average: ${(duration / 10000).toFixed(4)}ms per GUID`);
console.log(`✓ Performance: ${duration < 100 ? 'PASS' : 'WARN'} (expected < 100ms)`);

// Summary
console.log('\n' + '='.repeat(50));
console.log('✅ All tests completed!');
console.log('\nPackage is ready to publish! 🚀');
