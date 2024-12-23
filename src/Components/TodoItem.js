import React, { useState } from "react";
import "./TodoItem.css";

export default function TodoItem({
  id,
  name,
  checked,
  onDoubleClick,
  onChecked,
  onDelete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);

  const handleEditChange = (event) => {
    setEditName(event.target.value);
  };

  const handleEditSave = () => {
    onEdit(editName, id);
    setIsEditing(false);
  };

  return (
    <div
      className="todo-item"
      style={checked ? { background: "yellowgreen" } : null}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={handleEditChange}
            onBlur={handleEditSave}
          />
          <button onClick={handleEditSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onChecked(id)}
          />
          <span onDoubleClick={() => setIsEditing(true)}>{name}</span>
          <button className="delete-button" onClick={() => onDelete(id)}>
            X
          </button>
        </>
      )}
    </div>
  );
}
