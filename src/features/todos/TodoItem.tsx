import React, { useState } from "react";
import { TodoState } from "./todoSlice";

const TodoItem: React.FC<{ todo: TodoState }> = ({ todo }) => {
  const [done, setDone] = useState(todo.done);

  const onTodoDoneHandler = () => {
    setDone((done) => !done);
  };

  return (
    <div>
      <section>
        <input type="checkbox" checked={done} onChange={onTodoDoneHandler} />
        <span>{todo.text}</span>
      </section>
    </div>
  );
};

export default TodoItem;
