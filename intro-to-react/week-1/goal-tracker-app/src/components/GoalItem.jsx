import React from "react";

export default function GoalItem({ goal, onToggle, onDelete, index }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggle(index)} />
      <span
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          textDecoration: goal.done ? "line-through" : "none",
        }}
      >
        {goal.text}
      </span>
      <button onClick={() => onDelete(index)}>Delete</button>
    </li>
  );
}
