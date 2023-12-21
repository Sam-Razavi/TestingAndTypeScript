import { isLowerCase } from './isLowerCase';

describe('isLowerCase', () => {
  it('should return true for lowercase strings', () => {
    expect(isLowerCase('hello')).toBe(true);
    expect(isLowerCase('world')).toBe(true);
  });

  it('should return false for strings with uppercase letters', () => {
    expect(isLowerCase('Hello')).toBe(false);
    expect(isLowerCase('World')).toBe(false);
  });

  it('should return false for strings with non-letter characters', () => {
    expect(isLowerCase('hello123')).toBe(false);
    expect(isLowerCase('123')).toBe(false);
    expect(isLowerCase('!@#')).toBe(false);
  });
});
