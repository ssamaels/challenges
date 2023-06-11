console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

const button = document.querySelector("button");

function createListOfElements() {
  const newLi = document.createElement("li");
  const newHeadLine = document.createElement("h3");
  const newTask = document.createElement("p");

  newHeadLine.textContent = headline;
  newTask.textContent = task;

  newLi.append(newHeadLine, newTask);
  todoList.append(newLi);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const headline = document.querySelector('[data-js="headline"]');
  const task = document.querySelector('[data-js="task"]');
  console.log("Headline: ", headline.value);
  console.log("Task: ", task.value);
  createListOfElements(headline, task);
  form.reset();
  event.target.elements.headline.focus();
});
