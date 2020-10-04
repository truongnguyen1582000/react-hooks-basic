import React from "react";
import PropTypes from "prop-types";
import "./TodoList.scss";

TodoList.propTypes = {
  onTodoClick: PropTypes.func,
  todo: PropTypes.array,
};

TodoList.defautProps = {
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(item) {
    if (onTodoClick) {
      onTodoClick(item); // send event with item to app.js
    }
  }

  return (
    <div className="TodoList">
      <ol className="todo-list">
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
      </ol>
      {!todos.length && <h2>Empty</h2>}
    </div>
  );
}

export default TodoList;
