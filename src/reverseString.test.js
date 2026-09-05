import { test, expect } from "@jest/globals"
import { reverseString } from "./reverseString";

test("string is reversed", () => {
  expect(reverseString("Quiver")).toBe("reviuQ");
  expect(reverseString("qwerty")).toBe("ytrewq");
})