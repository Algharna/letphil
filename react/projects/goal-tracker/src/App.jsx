import React from "react";

function App() {
  const [goals, setGoals] = React.useState([]);
  const [goal, setGoal] = React.useState([]);

  function addGoal() {
    setGoals((prev) => [...prev, goal]);
  }

  function inputChange(e) {
    console.log(e.target.value);
    setGoal(e.target.value);
  }

  function deleteGoal(index) {
    setGoals((prev) =>
      prev.filter((_, idx) => {
        idx !== index;
      })
    );
  }
  return (
    <>
      <h1>Goal Tracker App</h1>
      {/* An input to get a goal from user */}
      <input onChange={inputChange} type="text" />
      <button onClick={addGoal}>Add goal</button>

      {/* Display list of goals */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {goals.map((goal, index) => (
          <li key={index}>
            <input type="checkbox" />
            {goal}
            <button
              onClick={() => {
                deleteGoal(index);
              }}
              style={{
                marginLeft: "10px",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
