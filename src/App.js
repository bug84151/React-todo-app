import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   const getTodos = async () => {
  //     const todosFromServer = await fetchTodos();
  //     setTodos(todosFromServer);
  //   };
  //   getTodos();
  // }, []);

  // fetch todos
  // const fetchTodos = async () => {
  //   const res = await fetch("http://localhost:5000/todos");
  //   const data = await res.json();
  //   return data;
  // };

  // Add new todo

  const addTodo = async (todo) => {
    // const res = await fetch("http://localhost:5000/todos", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(todo),
    // });

    // const data = await res.json();
    // setTodos([...todos, data]);
    const id = Math.floor(Math.random() * 1000) + 1;
    const updatedTodo = { id, ...todo };
    setTodos([...todos, updatedTodo]);
  };

  // delete todo

  const deleteTask = (id) => {
    // await fetch(`http://localhost:5000/todos/${id}`, {
    //   method: "DELETE",
    // });

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-[#fda4af]">
      <div className="todo-container overflow-x-auto rounded-lg px-10 py-5 space-y-6 h-3/4 w-1/3 bg-[#f43f5e] mobile:h-full mobile:w-full">
        <Header />
        <AddTodo onAdd={addTodo} />
        {todos.length > 0 ? (
          <Todos todos={todos} onDelete={deleteTask} />
        ) : (
          <h1
            className="mx-auto
           pt-20 text-3xl text-gray-200 opacity-25 font-bold text-center"
          >
            "What are we doing today 😁"
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
