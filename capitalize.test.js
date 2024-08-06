import { capitalize } from './capitalize';

test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('Hello')).toBe('Hello');
  expect(capitalize('')).toBe('');
  expect(capitalize('h')).toBe('H');
  expect(capitalize('hello world')).toBe('Hello world');
});
