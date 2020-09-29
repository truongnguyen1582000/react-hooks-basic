import React from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <div className="app-sub">
        <h2>Sub</h2>
      </div>
      <ColorBox></ColorBox>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
