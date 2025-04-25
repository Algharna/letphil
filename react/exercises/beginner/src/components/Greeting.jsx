import { useState } from "react";

export default function Greeting() {
  const [name, setName] = useState("John Doe");
  const [newName, setNewName] = useState("");

  function submitName() {
    setName(newName);
  }

  function captureName(e) {
    setNewName(e.target.value);
  }
  return (
    <>
      <h2>Submit Name:</h2>
      <input type="text" onChange={captureName} />
      <button
        onClick={() => {
          submitName();
        }}
      >
        Add Name
      </button>
      <br />
      Your name: {name}
    </>
  );
}
