import { validateZip } from './validateZip';

describe('validateZip', () => {
  it('should return true for a valid ZIP code', () => {
    expect(validateZip('12345')).toBe(true);
  });

  it('should return false for an invalid ZIP code', () => {
    expect(validateZip('1234')).toBe(false);  // Less than 5 digits
    expect(validateZip('123456')).toBe(false); // More than 5 digits
    expect(validateZip('abcde')).toBe(false);  // Non-numeric characters
  });
});
