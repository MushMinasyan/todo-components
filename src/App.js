import React, { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [lists, setLists] = useState([
    { id: Date.now(), name: "row1", checked: false, isDoubleClicked: false },
    {
      id: Date.now() + 1,
      name: "row2",
      checked: false,
      isDoubleClicked: false,
    },
  ]);

  const handleDelete = (id) => {
    setLists(lists.filter((el) => el.id !== id));
  };

  const handleAdd = (name) => {
    setLists([
      ...lists,
      { id: Date.now(), name, checked: false, isDoubleClicked: false },
    ]);
  };

  const handleChecked = (id) => {
    setLists(
      lists.map((el) => (el.id === id ? { ...el, checked: !el.checked } : el))
    );
  };

  const onDoubleClick = (id) => {
    setLists(
      lists.map((el) =>
        el.id === id ? { ...el, isDoubleClicked: !el.isDoubleClicked } : el
      )
    );
  };

  const handleEdit = (value, id) => {
    setLists(
      lists.map((el) =>
        el.id === id ? { ...el, name: value, isDoubleClicked: false } : el
      )
    );
  };

  return (
    <div className="app">
      <TodoForm onAdd={handleAdd} />
      <TodoList
        lists={lists}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onDoubleClick={onDoubleClick}
        onChecked={handleChecked}
      />
    </div>
  );
}

export default App;
