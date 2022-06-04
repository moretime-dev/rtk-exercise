import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxTypeHooks";

import { decrement, increment, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const onAmountChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setAmount(+event.currentTarget.value);
  };

  const onIncrementHandler = () => {
    dispatch(increment());
  };

  const onDecrementHandler = () => {
    dispatch(decrement());
  };

  const onIncrementByAmountHandler = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="border rounded-lg m-2 p-1 bg-gray-200"
        onClick={onDecrementHandler}
      >
        Decrement
      </button>
      <button
        className="border rounded-lg m-2 p-1 bg-gray-200"
        onClick={onIncrementHandler}
      >
        Increment
      </button>{" "}
      <input
        type="number"
        className="border w-1/5"
        value={amount}
        onChange={(e) => onAmountChangeHandler(e)}
      />
      <button
        className="border rounded-lg m-2 p-1 bg-gray-200"
        onClick={onIncrementByAmountHandler}
      >
        Increment By Amount
      </button>
    </div>
  );
};

export default Counter;
