import React, { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.trim()) {
      onAdd(value);
      setValue("");
    }
  };

  return (
    <div className="todo-form">
      <input
        onChange={handleChange}
        value={value}
        placeholder="Add a new task"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
