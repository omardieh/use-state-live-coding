import "./App.css";
import { useState } from "react";

const userObject = {
  name: "Bob",
  age: 17,
  city: "Berlin",
};

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  // const [user, setUser] = useState(userObject);
  const [user, setUser] = useState({
    name: "Bob",
    age: 17,
    city: "Berlin",
  });

  function incrementAge() {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  }

  const countriesData = ["Germany", "Spain", "France"];
  const [countries, setCountries] = useState(["Germany", "Spain", "France"]);

  function addNewCountry() {
    setCountries((prevCountries) => [...prevCountries, "Italy"]);

    setCountries((prevCountries) => {
      const newCountries = prevCountries;
      newCountries.push("italy");
      return newCountries;
    });
  }

  // this will cause infinite loop :
  // setCount(count - 1);
  // console.log(count);

  function handleIncrement() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function handleDecrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  console.log(username);
  return (
    <div className="App">
      <button onClick={handleIncrement}> increment </button>
      {count}
      <button onClick={handleDecrement}> decrement </button>
      <input
        onChange={(event) => setUsername(event.target.value)}
        type="text"
      />
      {username}
      <button onClick={incrementAge}> update age </button>
      <button onClick={addNewCountry}> update country </button>
      {JSON.stringify(user)}
      {JSON.stringify(countries)}
    </div>
  );
}

export default App;
