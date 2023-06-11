console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const radios = document.getElementsByName("operator");
console.log(radios);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const numA = Number(formElements.numberA.value);
  const numB = Number(formElements.numberB.value);

  let result;

  // --v-- write your code here --v--
  switch (formElements.operator.value) {
    case "addition":
      result = add(numA, numB);
      break;
    case "multiplication":
      result = multiply(numA, numB);
      break;
    case "subtraction":
      result = subtract(numA, numB);
      break;
    case "division":
      result = divide(numA, numB);
      break;
  }

  // let element;
  // for (let i = 0; i < radios.length; i++) {
  //   if (radios[i].checked) {
  //     element = radios[i].value;
  //     switch (element) {
  //       case "addition":
  //         result = add(numA, numB);
  //         break;
  //       case "multiplication":
  //         result = multiply(numA, numB);
  //         break;
  //       case "subtraction":
  //         result = subtract(numA, numB);
  //         break;
  //       case "division":
  //         result = divide(numA, numB);
  //         break;
  //     }
  //   }
  // }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
