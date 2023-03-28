import { useState } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "wash dirty clothes",
      isDone: true,
    },
    {
      id: 2,
      title: "take out trash",
      isDone: false,
    },
    {
      id: 3,
      title: "code",
      isDone: true,
    },
  ]);

  // Add new todo

  const addTodo = (todo) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const updatedTodo = { id, ...todo };
    setTodos([...todos, updatedTodo]);
  };

  // delete todo

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <AddTodo onAdd={addTodo} />
      {todos.length > 0 ? (
        <Todos todos={todos} onDelete={deleteTask} />
      ) : (
        "What are we doing today 😁"
      )}
    </div>
  );
}

export default App;
