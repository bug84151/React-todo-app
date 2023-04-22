import { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  // storage
  // localStorage.removeItem("storedTodos");
  if (localStorage.getItem("storedTodos") == null) {
    localStorage.setItem("storedTodos", JSON.stringify([]));
  }
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("storedTodos"));
    setTodos(storedTodos);
    console.log(storedTodos);
  }, []);

  // Add new todo
  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const updatedTodo = { id, ...todo };
    setTodos([...todos, updatedTodo]);
    // localStorage.setItem("storedTodos", JSON.stringify(todos));
    const recievedTodo = JSON.parse(localStorage.getItem("storedTodos"));

    recievedTodo.push(updatedTodo);

    localStorage.setItem("storedTodos", JSON.stringify(recievedTodo));
  };

  // delete todo

  const deleteTask = (id) => {
    const recievedTodo = JSON.parse(localStorage.getItem("storedTodos"));

    const newTodos = recievedTodo.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("storedTodos", JSON.stringify(newTodos));
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
