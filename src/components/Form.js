import React from "react";

export default function Form({ setInputText }) {
  function inputText(event) {
    console.log(event.target.value);
    setInputText(event.target.value);
  }
  return (
    <div className="Form">
      <form className="row">
        <div className="col-8">
          <input
            type="text"
            className="todo-input shadow"
            onChange={inputText}
          />
          <button className="todo-button shadow" type="submit">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="select shadow">
          <select name="todos" className="filter-todo shadow">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}
