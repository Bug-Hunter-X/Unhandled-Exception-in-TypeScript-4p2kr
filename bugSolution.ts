function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result: number;

try {
  result = add(5, 3);
  console.log(result); // Output: 8

  result = subtract(10, 4);
  console.log(result); // Output: 6

  result = multiply(7, 2);
  console.log(result); // Output: 14

  result = divide(9, 0);
  console.log(result); 
} catch (error: any) {
  console.error('An error occurred:', error.message); // Output: An error occurred: Cannot divide by zero
}
