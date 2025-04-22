const { reverseString, findMax, isPalindrome } = require('./problems');

describe('reverseString', () => {
  const testCases = [
    { input: 'hello', expected: 'olleh', description: 'regular word' },
    { input: '', expected: '', description: 'empty string' },
    { input: 'a', expected: 'a', description: 'single character' },
    { input: 'hello world', expected: 'dlrow olleh', description: 'string with spaces' },
    { input: 'hello!', expected: '!olleh', description: 'string with special characters' },
    { input: '123!@#', expected: '#@!321', description: 'numbers and special characters' },
  ];

  testCases.forEach(({ input, expected, description }) => {
    test(`reverses ${description}`, () => {
      expect(reverseString(input)).toBe(expected);
    });
  });
});

describe('findMax', () => {
  const testCases = [
    { input: [1, 5, 3, 9], expected: 9, description: 'positive numbers' },
    { input: [42], expected: 42, description: 'single element array' },
    { input: [-1, -5, -3], expected: -1, description: 'negative numbers' },
    { input: [-10, 0, 10, 5], expected: 10, description: 'mixed positive and negative' },
    { input: [1.5, 2.5, 1.1, 2.2], expected: 2.5, description: 'decimal numbers' },
  ];

  testCases.forEach(({ input, expected, description }) => {
    test(`finds max in array with ${description}`, () => {
      expect(findMax(input)).toBe(expected);
    });
  });

  test('throws error for empty array', () => {
    expect(() => findMax([])).toThrow();
  });
});

describe('isPalindrome', () => {
  const testCases = [
    { input: 'racecar', expected: true, description: 'palindrome word' },
    { input: 'level', expected: true, description: 'another palindrome' },
    { input: 'madam', expected: true, description: 'yet another palindrome' },
    { input: 'hello', expected: false, description: 'non-palindrome word' },
    { input: 'world', expected: false, description: 'another non-palindrome' },
    { input: '', expected: true, description: 'empty string' },
    { input: 'a', expected: true, description: 'single character' },
    { input: 'Racecar', expected: false, description: 'case-sensitive palindrome' },
  ];

  testCases.forEach(({ input, expected, description }) => {
    test(`correctly identifies ${description}`, () => {
      expect(isPalindrome(input)).toBe(expected);
    });
  });
});
