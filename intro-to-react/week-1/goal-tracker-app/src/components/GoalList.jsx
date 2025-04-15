import React from "react";
import GoalItem from "./GoalItem";

export default function GoalList({ goals, onToggle, onDelete }) {
  if (goals.length == 0) {
    return <p>No goals added yet</p>;
  }
  return (
    <ul>
      {goals.map((goal, index) => (
        <GoalItem
          goal={goal}
          key={index}
          index={index}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
