import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
  it('should return true for a valid email', () => {
    expect(validateEmail('jonatan@gmail.com')).toBe(true);
  });

  it('should return false for an invalid email', () => {
    expect(validateEmail('jonatan@gmail')).toBe(false);
    expect(validateEmail('jonatan.com')).toBe(false);
  });
});
