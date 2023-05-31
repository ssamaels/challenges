console.clear();

logSeparator(1);
// console.log("Exercise 1:");
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

// Uncomment the next line of code and figure out why it does not work:

function logText() {
  console.log("This text does not appear. Why?");
}
logText();

logSeparator(2);
// console.log("Exercise 2:");
/*
2: Look at the functions below. They are almost identical. Can you find a way to generalize them into a new function with an input parameter? Replace the function calls below with your new function.
*/

function greetBob() {
  console.log("Welcome Bob, good to see you again!");
}

function greetAlice() {
  console.log("Welcome Alice, good to see you again!");
}

function greetMary() {
  console.log("Welcome Mary, good to see you again!");
}

greetAlice();
greetBob();
greetMary();

// --v-- write your code here --v--

function greet(greetAlice, greetBob, greetMary) {
  // console.log("Welcome all! Good to see you again!");
}
greet(greetAlice, greetBob, greetMary);

// --^-- write your code here --^--

logSeparator(3);
// console.log("3:");
/*
3: We log a little separation text for each subtask. This is repetitive code, so lets write a function 'logSeparator' which takes the number of the exercise as an input parameter and logs the respective separator. then use this function to replace the existing separator logs in this javascript file.
*/

// --v-- write your code here --v--
function logSeparator(n) {
  console.log("Exercise", n, " :", "-------------");
}

// --^-- write your code here --^--
