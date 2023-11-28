import { expect, it } from "vitest";
import { calculateSquare, validateNumber } from "./validation";

it('should throw error if invalid number provided', () => {
    const number = 'string'
    // const result = validateNumber(number);
    const testFn = () => validateNumber(number);
    
    expect(testFn).toThrow('Invalid number input');
})


it('should works fine if number provided', () => {
    const number = 11
    // const result = validateNumber(number);
    const testFn = () => validateNumber(number);
    
    expect(testFn).not.toThrow()
})