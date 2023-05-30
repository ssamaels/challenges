const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  let result = "";

  if (age > 19) {
    result = "You are not a teen.";
  } else if (age < 13) {
    result = "You are a baby.";
  } else {
    result = "You are a teen.";
  }

  console.log(result);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
