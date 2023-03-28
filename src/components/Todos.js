import Todo from "./Todo";

const Todos = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default Todos;
