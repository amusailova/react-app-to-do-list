import React, { useState } from "react";
import "./App.css";

//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import logoPlans from "./components/logoPlans.png";

export default function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App container-fluid shadow">
      <header className="row">
        <h1 className="col-5">To-Do List</h1>
        <img src={logoPlans} alt="logo" />
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}
