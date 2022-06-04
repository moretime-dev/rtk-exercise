import { useAppSelector, useAppDispatch } from "../../hooks/reduxTypeHooks";

import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  console.log(todos);

  return (
    <div>
      <AddTodo />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
