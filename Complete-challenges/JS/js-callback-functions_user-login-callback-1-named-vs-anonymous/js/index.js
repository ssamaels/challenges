console.clear();

function showWelcomeMessage() {
  let welcomeMessage = "Welcome! You are logged in now.";
  console.log(welcomeMessage);
}
function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess(showWelcomeMessage);
}

// Call handleUserLogin below!
handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  let welcomeMessage = "Welcome! You are logged in now.";
  console.log(welcomeMessage);
});
