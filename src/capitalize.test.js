import { test, expect } from "@jest/globals";
import { capitalize } from "./capitalize";

test('capitalizes', () => {
  expect(capitalize('dog')).toBe('Dog');
  expect(capitalize('machine')).toBe('Machine');
})
