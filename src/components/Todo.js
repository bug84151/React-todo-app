import { FaTrash } from "react-icons/fa";

const Todo = ({ todo, onDelete }) => {
  return (
    <div className="flex justify-between items-center px-5 rounded-md h-10 bg-[#4c0519] text-white">
      <input
        type="checkbox"
        style={{ color: "green" }}
        className="text-green-500"
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
