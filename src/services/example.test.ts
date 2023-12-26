import { exampleFunction } from './example.js';

describe('testFunction', () => {
  it('should return "test"', () => {
    const result = exampleFunction();
    expect(result).toBe('example');
  });
});