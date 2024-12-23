import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  lists,
  onDelete,
  onEdit,
  onDoubleClick,
  onChecked,
}) {
  return (
    <div className="todo-list">
      {lists.map(({ id, name, isDoubleClicked, checked }) => (
        <TodoItem
          key={id}
          id={id}
          name={name}
          checked={checked}
          onDoubleClick={onDoubleClick}
          onChecked={onChecked}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
