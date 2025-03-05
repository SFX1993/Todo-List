const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list ");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
