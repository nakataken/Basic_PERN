import React, { Fragment } from "react";
import "./App.css";
// Components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
      <div className="container">
        <InputTodo></InputTodo>
        <ListTodos></ListTodos>
      </div>
    </>
  );
}

export default App;
