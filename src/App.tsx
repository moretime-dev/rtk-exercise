import "./App.css";
import Counter from "./features/counter/Counter";
import TodoList from "./features/todos/TodoList";

function App() {
  return (
    <>
      <div className="border w-1/2 m-auto">
        <Counter />
      </div>
      <div className="border w-1/2 m-auto">
        <TodoList />
      </div>
    </>
  );
}

export default App;
