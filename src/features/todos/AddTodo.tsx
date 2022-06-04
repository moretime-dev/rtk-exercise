import { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");

  const onTodoTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="p-2">
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        className="border-2 w-2/3"
        onChange={onTodoTextChangeHandler}
      />
      <button className="border rounded-lg ml-2 p-1 bg-green-200">
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
