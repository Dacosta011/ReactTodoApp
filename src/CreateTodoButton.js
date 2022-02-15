import React, { useState } from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({ save }) {
  const [todoText, setTodoText] = useState("");
  const onChangeText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div className="add-section-container">
      <p className="title-add">Add a new task</p>
      <div className="input-button-container">
        <input
          value={todoText}
          className="input-add"
          type="text"
          placeholder="type a new task"
          onChange={onChangeText}
        />
        <button
          className="add-button"
          onClick={() => {
            save(todoText);
            setTodoText("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default CreateTodoButton;
