import { useState } from "react";

export default function InputForm() {
  const [text, setText] = useState("Your text!");
  function handleOnChange(e) {
    const newValue = e.target.value;
    setText(newValue);
  }
  return (
    <>
      <h2>Input Form</h2>
      <input type="text" onChange={handleOnChange} />
      <p>{text}</p>
    </>
  );
}
