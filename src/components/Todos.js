import Todo from "./Todo";

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="space-y-6">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Todos;
