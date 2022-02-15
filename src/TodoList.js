import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">{props.children}</ul>
    </div>
  );
}

export default TodoList;
