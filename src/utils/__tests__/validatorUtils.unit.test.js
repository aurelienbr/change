//@flow
import { validateEmail } from '~utils/validatorUtils';

describe('validatorUtils', () => {
  describe('validateEmail', () => {
    test('should return true with good format', () => {
      expect(validateEmail('name@company.com')).toBe(true);
    });
    test('should return true with wrong format', () => {
      expect(validateEmail('aefegf')).toBe(false);
    });
  });
});
