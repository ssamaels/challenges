console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (let language in languages) {
  let optionMenu = document.createElement("option");
  optionMenu.textContent = languages[language];
  select.append(optionMenu);
}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (let item in nav) {
  const anchor = document.createElement("a");
  const listItem = document.createElement("li");
  anchor.textContent = nav[item].text;
  anchor.href = nav[item].href;
  anchor.append(listItem);
  ul.append(anchor);
}
// --^-- write/change code here --^--
