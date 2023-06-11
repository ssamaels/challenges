console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
const body = document.querySelector("body");

const newPost = document.createElement("article");
newPost.classList.add("post");
body.append(newPost);

const newPostParagraph = document.createElement("p");
newPostParagraph.classList.add("post__content");
newPostParagraph.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`;
newPost.append(newPostParagraph);

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
newPost.append(newPostFooter);

const newFooterSpan = document.createElement("span");
newFooterSpan.classList.add("post__username");
newFooterSpan.textContent = `@username`;
newPostFooter.append(newFooterSpan);

const newLikeButton = document.createElement("button");
newLikeButton.addEventListener("click", handleLikeButtonClick);
newLikeButton.classList.add("post__button");
newLikeButton.textContent = `♥ Like`;
newPostFooter.append(newLikeButton);
// Use document.createElement() and append another social media post to the body.
