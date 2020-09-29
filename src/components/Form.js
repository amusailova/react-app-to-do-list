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
        <input
          data-inline="true"
          value={inputText}
          type="text"
          placeholder="New item..."
          className="col-4 form-control todo-input shadow"
          onChange={inputTextHandler}
        />
        <button
          data-inline="true"
          onClick={submitTodoHandler}
          className="col-1 btn todo-button shadow"
          type="submit"
        >
          <i class="fas fa-plus"></i>
        </button>

        <div className="select">
          <select
            data-inline="true"
            onChange={statusHandler}
            name="todos"
            className="col form-control shadow"
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
