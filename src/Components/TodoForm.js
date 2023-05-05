import { Paper } from "@mui/material";
import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        className="todo-input"
        placeholder="Quais são as tarefas de hoje?"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" className="todo-btn">
        Add Tarefa
      </button>
    </form>
  );
};
