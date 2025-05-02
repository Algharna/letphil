import { useState } from "react";

export default function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleOnChange(e) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    inputValue === ""
      ? alert("Try again!")
      : setTodos((prev) => [
          ...prev,
          { id: prev.length, text: inputValue, isComplete: false },
        ]);
  }
  function deleteTodo(idxToRemove) {
    setTodos((prev) => prev.filter((_, idx) => idx !== idxToRemove));
  }

  function handleIsComplete(idxToCheck) {
    setTodos((prev) =>
      prev.map((todo, idx) =>
        idx === idxToCheck ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  return (
    <>
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter Todo" onChange={handleOnChange} />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <h2>Todos:</h2>
      <ul>
        {todos.map((todo, idx) => (
          <li
            key={todo.id}
            style={{
              listStyleType: "none",
            }}
          >
            <input
              type="checkbox"
              style={{
                marginRight: 15,
              }}
              onChange={() => {
                handleIsComplete(idx);
              }}
            />
            <span
              style={{
                textDecoration:
                  todo.isComplete === true ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => {
                deleteTodo(idx);
              }}
              style={{
                marginLeft: 15,
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
