import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [editInput, setEditInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleAdd = (text) => {
    setTodo([...todo, { id: Date.now(), title: text, isComplete: false }]);
  };

  const handleDelete = (id) => {
    const delfun = todo.filter((el) => el.id != id);
    setTodo(delfun);
  };

  const handleEdit = (id) => {
    setEdit(true);
    todo.filter((el) => {
      if (el.id == id) {
        // console.log(el.title);
        setEditInput(el.title);
      }
    });
    setId(id);
  };

  const EditButton = () => {
    const update = todo.map((el) => {
      if (el.id == id) {
        return { ...el, title: editInput };
      } else {
        return el;
      }
    });

    setTodo(update);
    setEdit(false);
  };

  return (
    <div>
      <TodoInput handleAdd={handleAdd} />
      <TodoItem
        data={todo}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      {edit ? (
        <div>
          <input
            type="text"
            placeholder="edit"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button onClick={EditButton}>editbtn</button>
        </div>
      ) : null}
    </div>
  );
};

export default Todo;
