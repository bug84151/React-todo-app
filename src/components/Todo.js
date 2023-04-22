import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Todo = ({ todo, onDelete }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);
  return (
    <div className="flex justify-between items-center px-5 rounded-md h-10 bg-[#4c0519] text-white">
      <input
        type="checkbox"
        value={todo.checked}
        checked={isChecked}
        onChange={(e) => {
          const todoChecked = e.target.checked;
          setIsChecked(!isChecked);
          // isChecked = e.target.checked;
          // console.log(todo);
          const completedTodoId = todo.id;
          const storedTodos = JSON.parse(localStorage.getItem("storedTodos"));
          console.log(storedTodos);
          storedTodos.forEach((todo) => {
            if (todo.id === completedTodoId) {
              todo.checked = todoChecked;
              localStorage.setItem("storedTodos", JSON.stringify(storedTodos));
            }
          });
        }}
      />
      <h1 className="font-cookie font-bold text-3xl">{todo.title}</h1>
      <FaTrash
        style={{ color: "red" }}
        onClick={() => onDelete(todo.id)}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Todo;
