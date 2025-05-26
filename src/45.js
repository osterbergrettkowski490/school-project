function multiply(a, b) {
  if (b === 0) throw new Error('Division by zero');
  const result = a * b;
  return result;
}

console.log(multiply(4, 5));
