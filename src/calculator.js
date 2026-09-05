export const calculator = (function () {
  let add = (a, b) => {
    return a + b;
  }
  let subtract = (a, b) => {
    return a - b;
  }
  let divide = (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by 0");
    }
    return a / b;
  }
  let multiply = (a, b) => {
    return a * b;
  }

  return { add, subtract, divide, multiply };
})();