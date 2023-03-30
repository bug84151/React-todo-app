import { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Enter a todo 🖋");
      return;
    }
    onAdd({ title });
    setTitle("");
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center space-y-3"
        onSubmit={onSubmit}
      >
        <input
          className="h-10 w-full rounded-md font-cookie text-3xl"
          type="text"
          placeholder="Enter todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="bg-red-400 rounded-md px-3 py-1 font-bold font-cookie text-white cursor-pointer hover:bg-red-700 text-lg"
          type="submit"
          value="Add Todo"
        />
      </form>
    </div>
  );
};

export default AddTodo;
