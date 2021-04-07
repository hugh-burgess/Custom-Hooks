import { useState } from "react";

export default function useUserData(onSubmit) {
  /*
  This hook receives a function as argument, which is called inside the handleSubmit function
  */
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    newsletter: false,
  });

  /*
  Add the necessary logic to this function or replace it with several functions, depending on how you want to handle onChange events
  */
  function handleChange(event) {
    const { value, name } = event.target;
    console.log(`${name}: ${value}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(userData);
  }
  /*
  Don't forget to return anything you want accessible outside of this function
  */
  return [userData, handleChange, handleSubmit];
}
