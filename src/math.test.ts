import { expect, test } from "vitest";
import { divide, add, subtract } from "./math";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 1 + 2 to equal 3", () => {
  expect(subtract(6, 2)).toBe(4);
});

test("divide", () => {
  expect(divide(6, 2)).toBe(3);
});
