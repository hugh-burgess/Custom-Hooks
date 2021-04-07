import "./App.css";
import { useState } from "react";

function App() {
  // Add states and eventHandlers here

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userAge, setUserAge] = useState();
  const [userEmail, setUserEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  function handleChange(event) {
    const { value, name, checked } = event.target;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "age") {
      setUserAge(value);
    } else if (name === "email") {
      setUserEmail(value);
    } else if (name === "newsletter") {
      setIsChecked(checked);
    }
    console.log(handleChange());
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    console.log("submitted");
    const userData = {
      firstName,
      lastName,
      userAge,
      userEmail,
      isChecked,
    };
    console.log(userData);
    form.reset();
  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          value={firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
          required
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          value={lastName}
          onChange={handleChange}
          type="text"
          name="lastName"
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          value={userAge}
          onChange={handleChange}
          type="number"
          name="age"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          value={userEmail}
          onChange={handleChange}
          type="email"
          name="email"
          required
        />
        <div className="newsletter">
          <input
            checked={isChecked}
            onChange={handleChange}
            type="checkbox"
            name="newsletter"
            required
          />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
