import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo_list")) || []
  );

  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => todo.title == x.title);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    localStorage.setItem("todo_list", JSON.stringify(newTodoList));
  }

  function handleTodoFormSubmit(formValues) {
    console.log(formValues);
    const newTodoList = [...todoList];
    newTodoList.push(formValues);
    setTodoList(newTodoList);
    localStorage.setItem("todo_list", JSON.stringify(newTodoList));
  }

  return (
    <div className="app">
      <h1>Hello World</h1>
      <div className="app-sub">
        <h2>Test SCSS</h2>
      </div>
      <ColorBox></ColorBox>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
    </div>
  );
}

export default App;
