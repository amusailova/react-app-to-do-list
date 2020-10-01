import React, { useState, useEffect } from "react";
import "./App.css";

//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function App() {
  // States

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(`all`);
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run once when the app starts
  useEffect(() => {
    getLocalTodos();
  },);
  // Save to Local
  const saveLocalTodos = React.useCallback(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // useEffect
  useEffect(() => {
    // Function
    function filterHandler() {
      switch (status) {
        case `completed`:
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case `uncompleted`:
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler();
    saveLocalTodos();
  }, [todos, status, saveLocalTodos]);


  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem(`todos`));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App container-fluid">
      <header className="row">
        <h1 className="col">To-Do List</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      <div className="coded-by">
        <a href="https://github.com/amusailova/react-app-to-do-list">
          Open-source
        </a>{" "}
        code by Alyona Musailova
      </div>
    </div>
  );
}
