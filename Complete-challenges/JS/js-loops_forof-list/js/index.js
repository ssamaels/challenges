console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (let programingLanguage of programmingLanguages) {
  let li = document.createElement("li");
  // let listItem = programingLanguage[i];
  li.textContent = programingLanguage;
  ol.append(li);
  console.log(programingLanguage);
}
// --^-- write/change code here --^--
