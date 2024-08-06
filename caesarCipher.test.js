import { caesarCipher } from './caesarCipher';

test('shifts characters by a given factor', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('ABC', 3)).toBe('DEF');
  expect(caesarCipher('HeLLo, World!', 3)).toBe('KhOOr, Zruog!');
  expect(caesarCipher('Hello, World!', 0)).toBe('Hello, World!');
});
