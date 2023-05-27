console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkMode = document.querySelector('[data-js="dark-mode-button"]');

const lightMode = document.querySelector('[data-js="light-mode-button"]');

const toggleMode = document.querySelector('[data-js="toggle-button"]');

darkMode.addEventListener("click", () => {
  console.log("You entered dark mode");
  bodyElement.classList.add("dark");
});

lightMode.addEventListener("click", () => {
  console.log("You entered light mode");
  bodyElement.classList.remove("dark");
});

toggleMode.addEventListener("click", () => {
  console.log("You playing!");
  bodyElement.classList.toggle("dark");
});
