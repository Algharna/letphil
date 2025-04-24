import React from "react";

function App() {
  let [num, setNum] = React.useState(0);
  function increment() {
    setNum((prev) => prev + 1);
  }
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={increment}>Count {num}</button>
    </>
  );
}

export default App;
