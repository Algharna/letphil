import React from "react";

function App() {
  const [goals, setGoals] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      done: false,
      text: e.target.goal.value,
    };
    const updatedList = [...goals, newGoal];
    setGoals(updatedList);
  }

  function handleDeleteItem(index) {
    // remove item at index
    console.log("index to be deleted", index);
    const updated = goals.filter((item, i) => i != index);

    setGoals(updated);
  }

  function handleGoalStatusUpdate(index) {
    // Update goal status
    const updated = goals.map((goal, i) =>
      i === index ? { ...goal, done: !goal.done } : goal
    );
    setGoals(updated);
  }

  return (
    <div>
      <h1>Goal tracker app</h1>
      {/* input to get a goal text from a user */}
      <form onSubmit={handleSubmit}>
        <input type="text" id="goal" />
        <button type="submit">Add goal</button>
      </form>

      {/* List of added goals */}
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onClick={() => handleGoalStatusUpdate(index)}
            />
            <span
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                textDecoration: goal.done ? "line-through" : "none",
              }}
            >
              {goal.text}
            </span>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
