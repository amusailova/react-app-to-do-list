import React from "react";

export default function Form({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) {
  function inputTextHandler(event) {
    setInputText(event.target.value);
  }

  function submitTodoHandler(event) {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText(" ");
  }
  function statusHandler(event) {
    setStatus(event.target.value);
  }
  return (
    <div className="Form">
      <form className="row">
        <div className="col-8">
          <input
            value={inputText}
            type="text"
            className="todo-input shadow"
            onChange={inputTextHandler}
          />
          <button
            onClick={submitTodoHandler}
            className="todo-button shadow"
            type="submit"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="select shadow">
          <select
            onChange={statusHandler}
            name="todos"
            className="filter-todo shadow"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}
