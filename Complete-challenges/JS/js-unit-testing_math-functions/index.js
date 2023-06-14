export function add(a, b) {
  return a + b;
}
add(-10, 4);
export function subtract(a, b) {
  return a - b;
}
subtract(5, 6);
export function multiply(a, b) {
  return a * b;
}
multiply(4, 7);
export function divide(a, b) {
  if (b === 0) {
    return "You should not do this!";
  }
  return a / b;
}
divide(8, 0);
