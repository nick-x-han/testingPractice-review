import { test, expect } from "@jest/globals";
import { analyzeArray } from "./analyzeArray";

test("returns correct object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([7, 8, 3, 4, 2, 6])).toEqual({
    average: 5,
    min: 2,
    max: 8,
    length: 6,
  });
});
