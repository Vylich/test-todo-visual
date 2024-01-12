import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleComplete }) {
  console.log(todos)
  return (
    <ul className="page__list">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;