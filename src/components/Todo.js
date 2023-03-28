import { FaTrash } from "react-icons/fa";

const Todo = ({ todo, onDelete }) => {
  return (
    <li>
      {todo.title}
      <FaTrash style={{ color: "red" }} onClick={() => onDelete(todo.id)} />
    </li>
  );
};

export default Todo;
