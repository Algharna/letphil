import { useState } from "react";

export default function Toggle() {
  const [buttonState, setButtonState] = useState("Click Me");
  function handleClick() {
    if (buttonState === "Click Me") setButtonState("On");
    buttonState === "On" ? setButtonState("Off") : setButtonState("On");
  }
  return (
    <>
      <h1>Toggle Button</h1>
      <button onClick={() => handleClick()}>{buttonState}</button>
    </>
  );
}
