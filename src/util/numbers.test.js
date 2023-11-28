import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it('should tranform to number format', () => {
    const number = '11'
    const result = transformToNumber(number);
    expect(result).toBe(Number(number));
})

it('should return NaN if anything else from number provided', () => {
    const number = 'string';
    const result = transformToNumber(number);
    expect(result).toBeNaN()
})