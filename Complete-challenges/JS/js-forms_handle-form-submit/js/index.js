console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  console.log(formElements.checkbox.checked);
  const formData = new FormData(event.target);
  console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data);
});
