import React from "react";

export default function GoalForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="goal" />
      <button type="submit">Add goal</button>
    </form>
  );
}
