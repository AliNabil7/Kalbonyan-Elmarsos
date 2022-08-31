import { getFilters } from "./filters";
import { getTodos, toggleTodo, removeTodo } from "./todos";

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {
  const todoEl = document.querySelector("#todos");
  const { searchText, hideCompleted } = getFilters();
  const filteredTodos = getTodos().filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const hideCompletedMatch = !hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

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

// generateTodoDOM
// Arguments: todo
// Return value: the todo element

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
    toggleTodo(todo.id), renderTodos();
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
    renderTodos();
  });

  return divEl;
};

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

const generateSummaryDOM = (todo) => {
  const summary = document.createElement("p");
  const plural = todo.length === 1 ? "" : "s";
  summary.classList.add("list-title");
  summary.textContent = `You have ${todo.length} todo${plural} left`;

  return summary;
};

// Make sure to set up the exports
export { generateTodoDOM, renderTodos, generateSummaryDOM };
