import { getGenitive } from './getGenitive';

describe('getGenitive', () => {
  it('should correctly form the genitive of names', () => {
    expect(getGenitive('Jonatan')).toBe('Jonatans');
    expect(getGenitive('Anna')).toBe('Annas');
    expect(getGenitive('Claes')).toBe('Claes');
    expect(getGenitive('Hampus')).toBe('Hampus');
    expect(getGenitive('Johanna')).toBe('Johannas');
  });
});
