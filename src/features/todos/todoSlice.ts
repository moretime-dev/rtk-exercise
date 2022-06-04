import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

// Define a type for the slice state
export interface TodoState {
  id: number;
  text: string;
  done: boolean;
}

// Define the initial state using that type
const initialState: TodoState[] = [
  {
    id: 1,
    text: "First Todo",
    done: false,
  },
];

export const todoSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoState>) => [
      ...state,
      action.payload,
    ],
  },
});

export const { addTodo } = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodo = (state: RootState) => state.todos;

export default todoSlice.reducer;
