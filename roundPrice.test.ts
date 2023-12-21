import { roundPrice } from './roundPrice';

describe('roundPrice with different currencies', () => {
    it('should handle SEK', () => {
      expect(roundPrice(232.10542, 'SEK')).toBe('232.11 SEK');
    });

    it('should handle USD', () => {
      expect(roundPrice(232.10542, 'USD')).toBe('$232.11');
    });

    it('should handle EUR', () => {
      expect(roundPrice(232.10542, 'EUR')).toBe('€232.11');
    });

    it('should handle GBP', () => {
      expect(roundPrice(232.10542, 'GBP')).toBe('£232.11');
    });
  });
