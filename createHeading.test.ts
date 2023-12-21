import { createHeading } from './createHeading';

describe('makeHeading', () => {
  it('should create an h1 heading', () => {
    expect(createHeading('Hello', 1)).toBe('<h1>Hello</h1>');
  });

  it('should create an h2 heading', () => {
    expect(createHeading('Next level', 2)).toBe('<h2>Next level</h2>');
  });
});
