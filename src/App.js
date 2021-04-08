import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: undefined,
    email: "",
    newsletter: false,
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
    console.log(`${name}: ${value}`);
  }

  function handleNewsletterChange(event) {
    const { checked, name } = event.target;
    setUserData({ ...userData, [name]: checked });
    console.log(`isChecked: ${checked}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userData);
    console.log("submitted");
    const form = event.target;
    setUserData({
      firstName: "",
      lastName: "",
      age: 0,
      email: "",
      newsletter: false,
    });
    form.reset();
  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          value={userData.firstName}
          onChange={handleChange}
          type="text"
          name="firstName"
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          value={userData.lastName}
          onChange={handleChange}
          type="text"
          name="lastName"
        />
        <label htmlFor="age">Age:</label>
        <input
          value={userData.age}
          onChange={handleChange}
          type="number"
          name="age"
        />
        <label htmlFor="email">Email:</label>
        <input
          value={userData.email}
          onChange={handleChange}
          type="email"
          name="email"
        />
        <div className="newsletter">
          <input
            checked={userData.newsletter}
            onChange={handleNewsletterChange}
            type="checkbox"
            name="newsletter"
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
