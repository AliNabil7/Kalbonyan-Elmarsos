"use strict";

const todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

renderTodos(todos, filters);

document.querySelector("#create-task").addEventListener("submit", (e) => {
  const text = e.target.elements.text.value.trim();
  e.preventDefault();

  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false,
    });
    saveTodos(todos);
    renderTodos(todos, filters);
    e.target.elements.text.value = "";
  }

  // MY TRIAL - WRONG PATH, REPLACED WITH ANDREW'S CODE
  // const p = document.createElement("p");
  // p.textContent = e.target.elements.todoText.value;
  // document.querySelector("#todos").appendChild(p);
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
