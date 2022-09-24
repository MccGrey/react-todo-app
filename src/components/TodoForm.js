import React, { useState } from "react";

export const TodoForm = (props) => {
  // Usestate
  const [input, setInput] = useState("");
  // end of usestate

  // function for submit
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };
  // end submit function
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add a Todo"
      />
      <button type="submit" className="todo-button">
        Add Todo
      </button>
    </form>
  );
};
