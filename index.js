const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (task.completed ? " completed" : "");
    li.innerHTML = `<span>${task.text}</span>
    <div>
    <button class="toggle" data-index="${index}">${
      task.completed ? "Undo" : "Done"
    }</button>
    <button class="delete" data-index="${index}">Delete</button></div>`;
    list.appendChild(li);
  });
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = { text: input.value.trim(), completed: false };
  if (newTask.text !== "") {
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    input.value = "";
  }
});
list.addEventListener("click", (e) => {
  const index = e.target.dataset.index;
  if (e.target.classList.contains("delete")) {
    tasks.splice(index, 1);
  } else if (e.target.classList.contains("toggle")) {
    tasks[index].completed = !tasks[index].completed;
  }
  saveTasks();
  renderTasks();
});
