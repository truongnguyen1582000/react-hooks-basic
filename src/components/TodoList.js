import React, { useState } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState(["eat", "learn", "sleep"]);

  function removeTodo(index) {
    console.log(index);
    let newTodoList = [...todoList];

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="TodoList">
      <ul>
        {todoList.map((todo, index) => (
          <li key={index} onClick={() => removeTodo(index)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
