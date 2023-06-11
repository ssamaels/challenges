console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newToastMessage = document.createElement("li");
  newToastMessage.classList.add("toast-container__message");
  newToastMessage.textContent = "I'm a NEW toast message.";
  newToastMessage.innerHTML = `<p>${newToastMessage.textContent}</p>`;
  toastContainer.append(newToastMessage);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  toastContainer.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});
