import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(item) {
    if (onTodoClick) {
      onTodoClick(item);
    }
  }
  return (
    <div className="TodoList">
      <ul className="todo-list">
        {todos &&
          todos.map((item, index) => (
            <li
              key={index}
              className="todo-list-item"
              onClick={() => handleClick(item)}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
