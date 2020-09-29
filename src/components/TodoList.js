import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, setTodos, filteredTodos }) {
  console.log(filteredTodos);
  return (
    <div className="todo-container shadow">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            todo={todo}
            ID={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}
