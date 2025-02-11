const taskInput = document.querySelector("#taskInput");
const addTask = document.getElementById("addTask");
const toDoList = document.getElementById("toDoList");

let toDos = [];

window.onload = renderList();

function ToDo(task, weight = 1) {
  this.task = task;
  this.weight = weight;
  this.createdAt = new Date();
  this.updatedAt = new Date();
  this.completed = false;
}

function addToDo() {
  if (taskInput.value.trim() == "") {
    alert("Enter a valid task.");
  } else {
    const toDo = new ToDo(taskInput.value);
    toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
    renderList();
    taskInput.value = "";
  }
}

// render list function ---------------------------------------
function renderListItem(toDoItem) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const taskName = document.createElement("p");
  taskName.innerText = toDoItem.task;
  const editTask = document.createElement("button");
  editTask.innerText = "Edit Task";
  editTask.id = "editTasks";
  const completeTask = document.createElement("button");
  completeTask.innerText = "Complete";
  completeTask.id = "completeTask";
  const removeTask = document.createElement("button");
  removeTask.innerText = "Remove";
  removeTask.id = "removeTask";
  li.appendChild(span);
  span.appendChild(taskName);
  span.append(completeTask);
  span.appendChild(editTask);
  span.appendChild(removeTask);

  console.log(localStorage.getItem("toDos", "createdAt"));

  function checkIfCompleted() {
    taskName.style.textDecoration = toDoItem.completed
      ? "line-through"
      : "none";
  }
  checkIfCompleted();

  //Checks if Task is completed or not
  completeTask.addEventListener("click", function () {
    let newCompleted = !toDoItem.completed;

    const index = toDos.findIndex(
      (item) => item.createdAt === toDoItem.createdAt
    );
    if (index !== -1) {
      toDos[index].completed = newCompleted;
      localStorage.setItem("toDos", JSON.stringify(toDos));
    }

    console.log(toDoItem.task, toDoItem.completed);
    renderList();
  });

  //Edit Task ----------------
  editTask.addEventListener("click", function () {
    const newTask = document.createElement("input");
    newTask.placeholder = "Edit task (Enter to confirm)";
    newTask.id = "newTask";

    taskName.parentNode.replaceChild(newTask, taskName);
    span.prepend(newTask);
    editTask.disabled = true;
    completeTask.disabled = true;
    removeTask.disabled = true;
    editTask.style.backgroundColor = "gray";
    completeTask.style.backgroundColor = "gray";
    removeTask.style.backgroundColor = "gray";

    // Listens for the "Enter" key to confirm the edit
    newTask.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        if (newTask.value.trim() == "") {
          alert("Enter a valid task.");
        } else {
          const newValue = newTask.value;
          const index = toDos.findIndex(
            (item) => item.createdAt === toDoItem.createdAt
          );
          if (index !== -1) {
            toDos[index].task = newValue;
            toDos[index].updatedAt = new Date();
            localStorage.setItem("toDos", JSON.stringify(toDos));
          }
        }
        renderList();
      }
    });
  });

  //Remove Task--------------------------------------
  removeTask.addEventListener("click", function () {
    console.log(toDos);

    const index = toDos.findIndex(
      (item) => item.createdAt === toDoItem.createdAt
    );
    if (index !== -1) {
      toDos.splice(index, 1);
      localStorage.setItem("toDos", JSON.stringify(toDos));
      renderList();
    }
  });
  return li;
}
//Renders list------------------
function renderList() {
  const getTodos = localStorage.getItem("toDos");
  if (getTodos) toDos = JSON.parse(getTodos);
  toDoList.innerHTML = "";
  for (let i = 0; i < toDos.length; i++) {
    const current = toDos[i];
    const listItem = renderListItem(current, i);
    toDoList.appendChild(listItem);
  }
}
//Clears localStorage and reloads page---------
function clearTasks() {
  localStorage.clear();
  alert("Tasks Cleared!");
  window.location.reload();
}

addTask.addEventListener("click", addToDo);
renderList();
