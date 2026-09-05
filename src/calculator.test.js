import { test, expect } from "@jest/globals"
import { calculator } from "./calculator"

test("calculator has correct shape", () => {
  expect(calculator).toHaveProperty('add');
  expect(calculator).toHaveProperty('subtract');
  expect(calculator).toHaveProperty('divide');
  expect(calculator).toHaveProperty('multiply');
})

test("calculator.add sums two numbers correctly", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(12, 6)).toBe(18);
})

test("calculator.subtract subtracts second number from first", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
  expect(calculator.subtract(15, 30)).toBe(-15);
})

test("calculator.multiply multiplies two numbers correctly", () => {
  expect(calculator.multiply(4.5, 2)).toBe(9);
  expect(calculator.multiply(15, -2)).toBe(-30);
})

test("calculator.divide divides first number by second number", () => {
  expect(calculator.divide(25, 5)).toBe(5);
  expect(calculator.divide(80, 25)).toBe(3.2);
})

test("calculator.divide handles divide by 0 properly", () => {
  expect(() => calculator.divide(25, 0)).toThrow(Error("Cannot divide by 0"))
})