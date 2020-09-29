import React from "react";

export default function Todo({ text, todo, todos, setTodos }) {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !InputEvent.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="form-control todo shadow">
      <li className={`todo-item ${todo.completed ? "completed" : ``}`}>
        {text}
      </li>
      <div class="btn-group" role="group" aria-label="First group">
        <button type="button" class="btn btn-secondary complete-btn shadow" onClick={completeHandler}>
          <i className="fas fa-check"></i>
        </button>
        <button type="button" class="btn btn-secondary trash-btn shadow" onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

