import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    setName(form.name.value);
    setEmail(form.email.value);
    form.reset();
    form.name.focus();
  }

  return (
    <>
      <form
        className="form"
        aria-labelledby="user-details"
        onSubmit={handleSubmit}
      >
        <h2 id="user-details">Please enter your details here!</h2>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" placeholder="John Doe" />
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@doe.com"
        />
        <button className="form__submit-button" type="submit">
          Submit
        </button>
      </form>
      <div className="container">
        <h1>Personal Details Form</h1>
        <Form />
        <h2>Your submitted details:</h2>
        <p>
          Name: <span className="output">{name}</span>
        </p>
        <p>
          Email: <span className="output">{email}</span>
        </p>
      </div>
    </>
  );
}
