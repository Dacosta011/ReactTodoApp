import React from "react";
import Complete from "./Complete";
import "./TodoItem.css";

function TodoItem({ todo, index, onComplete }) {
  const liStyle = {
    backgroundColor: "#9E9E9E",
    borderRadius: "15px 0 0 15px",
  };

  return (
    <li className="list-item" style={index % 2 === 0 ? liStyle : null}>
      <span className="list-logo" onClick={onComplete}>
        <Complete comp={todo.complete}/>
      </span>
      <p
        className="list-text"
        style={todo.complete ? { textDecoration: "line-through" } : null}
      >
        {todo.text}
      </p>
    </li>
  );
}

export default TodoItem;
