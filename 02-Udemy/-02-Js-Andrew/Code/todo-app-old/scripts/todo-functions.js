"use strict";

// Fetch existing todos from localStorage
// getSavedTodos
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save todos to localStorage
// saveTodos
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Remove a task from the todo list
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle task completion with checkbox
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }
};

// Render application todos based on filters
// renderTodos
const renderTodos = (todos, filters) => {
  const todoEl = document.querySelector("#todos");
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  // filteredTodos = filteredTodos.filter(function (todo) {
  //   return !filters.hideCompleted || !todo.completed;

  //   // if (filters.hideCompleted) {
  //   //   return !todo.completed;
  //   // } else {
  //   //   return true;
  //   // }
  // });

  const todosLeft = filteredTodos.filter((todo) => !todo.completed);

  todoEl.innerHTML = "";
  todoEl.appendChild(generateSummaryDOM(todosLeft));

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      // const p = document.createElement("p");
      // p.textContent = todo.text;
      todoEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEl = document.createElement("p");
    messageEl.classList.add("empty-message");
    messageEl.textContent = "There are no to-dos to show!";
    todoEl.appendChild(messageEl);
  }
};

// Get the DOM elements for and individual note
// generateTodoDOM
const generateTodoDOM = (todo) => {
  const divEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const textEl = document.createElement("span");
  const checkBox = document.createElement("input");
  const button = document.createElement("button");

  checkBox.setAttribute("type", "checkbox");
  checkBox.checked = todo.completed;
  containerEl.appendChild(checkBox);
  checkBox.addEventListener("change", () => {
    toggleTodo(todo.id), saveTodos(todos), renderTodos(todos, filters);
  });

  textEl.textContent = todo.text;
  containerEl.appendChild(textEl);

  // Setup container
  divEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  divEl.appendChild(containerEl);

  button.textContent = "Delete Task";
  button.classList.add("button", "button--text");
  divEl.appendChild(button);
  button.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return divEl;
};

// Get the DOM elements for list summary
// generateSummaryDOM
const generateSummaryDOM = (todo) => {
  const summary = document.createElement("p");
  const plural = todo.length === 1 ? "" : "s";
  summary.classList.add("list-title");
  summary.textContent = `You have ${todo.length} todo${plural} left`;

  return summary;
};
