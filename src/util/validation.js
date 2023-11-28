export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error('Invalid number input');
  }
}


export function calculateSquare(num) {
  if (num === undefined || typeof num !== 'number') {
    throw new Error('You must provide a number.');
  }
  return num * num;
}