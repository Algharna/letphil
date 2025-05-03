import { useState } from "react";

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState(null);
  const [finalNum, setFinalNum] = useState(null);

  function calculate() {
    console.log("test");
    console.log(operator);
    switch (operator) {
      case "+":
        setFinalNum(firstNumber + secondNumber);
        break;
      case "-":
        setFinalNum(firstNumber - secondNumber);
        break;
      case "*":
        setFinalNum(firstNumber * secondNumber);
        break;
      case "/":
        firstNumber === 0 && secondNumber === 0
          ? alert("Cannot divide by zero!")
          : setFinalNum(firstNumber / secondNumber);
        break;
    }
    console.log(finalNum);
  }

  return (
    <>
      <h1>Calculator</h1>
      <label htmlFor="firstNumber">Enter first number</label>
      <input
        type="number"
        name="firstNumber"
        value={firstNumber}
        onChange={(e) => setFirstNumber(Number(e.target.value))}
      />
      <br />
      <label htmlFor="secondNumber">Enter second number</label>
      <input
        type="number"
        name="secondNumber"
        value={secondNumber}
        onChange={(e) => setSecondNumber(Number(e.target.value))}
      />
      <br />
      <select onChange={(e) => setOperator(e.target.value)}>
        <option>Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <br />
      <button
        onClick={() => {
          calculate();
        }}
      >
        Calculate
      </button>
      <br />
      <span>{finalNum !== null ? finalNum : ""}</span>
    </>
  );
}
