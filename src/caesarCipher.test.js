import { test, expect } from "@jest/globals"
import { caesarCipher } from "./caesarCipher"

test("shifts lowercase", () => {
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('def', 3)).toBe('ghi');
})

test("wraps from z to a", () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('xyz', 6)).toBe('def');
})

test("preserves capitalization", () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test("doesn't change punctuation", () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})