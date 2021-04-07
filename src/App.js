import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  // this state holds all submitted users, you'll need this later
  const [users, setUsers] = useState([]);

  // implement useUserData here, don't forget to use the respective

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={() => console.log("This should be a onSubmit handler")}>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          name="firstName"
          onChange={() => console.log("This should be an onChange handler")}
        />
        <label htmlFor="lastName">Surname:</label>
        <input type="text" name="lastName" />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <div className="newsletter">
          <input type="checkbox" name="newsletter" />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
        </div>
      </form>
      <UserList users={users} />
    </div>
  );
}

export default App;
