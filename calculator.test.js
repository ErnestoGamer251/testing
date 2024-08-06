import { calculator } from './calculator';

test('adds two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('divides two numbers', () => {
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});
