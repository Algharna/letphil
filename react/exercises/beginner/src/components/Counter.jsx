import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);

  function add() {
    setNum((prev) => prev + 1);
  }

  function subtract() {
    setNum((prev) => prev - 1);
  }
  return (
    <>
      <h2>
        <button
          onClick={subtract}
          style={{
            marginRight: "5px",
          }}
        >
          -
        </button>
        {num}
        <button
          onClick={add}
          style={{
            marginLeft: "5px",
          }}
        >
          +
        </button>
      </h2>
    </>
  );
}
