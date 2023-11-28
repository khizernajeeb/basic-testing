import { expect, it } from "vitest";
import { add } from "./math";

it("should sum up array of numbers", () => {
  const numbers = [1, 2, 3];
  const sum = numbers.reduce((prev, current) => prev + current, 0);
  const result = add(numbers);
  expect(result).toBe(sum);
});

it("it should yield NaN if at least one invalid number is provided", () => {
  const numbers = [1, "string", 2];
  const result = add(numbers);
  expect(result).toBeNaN();
});
