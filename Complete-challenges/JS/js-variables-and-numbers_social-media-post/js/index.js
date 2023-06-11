console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
let title = "Post";
let text = "Lorem Ipsum bla bla banana";
let numberOfLikes = 77;
let user = "Samael";
let isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(
  "Title is: ",
  title,
  "\n",
  "Text: ",
  text,
  "\n",
  "Likes: ",
  numberOfLikes,
  "\n",
  "User: ",
  user,
  "\n",
  "Reported: ",
  isReported
);
console.log(numberOfLikes + 1);
// --^-- write your code here --^--
