console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

const span = document.querySelector('[data-js="result"]');

firstInput.addEventListener("input", () => {
  result.innerHTML = "";
  const resultArea = document.createElement("span");
  resultArea.innerHTML = `<span>${firstInput.value * secondInput.value}</span>`;
  result.append(resultArea);
});

secondInput.addEventListener("input", () => {
  result.innerHTML = "";
  const resultArea = document.createElement("span");
  resultArea.innerHTML = `<span>${firstInput.value * secondInput.value}</span>`;
  result.append(resultArea);
});
