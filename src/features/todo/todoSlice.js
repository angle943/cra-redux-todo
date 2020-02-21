import { createSlice} from "@reduxjs/toolkit";

let todoId = 1;

export const slice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    create: (state, action) => {
      const {payload} = action;

      state.push({
        id: todoId,
        description: payload,
        isComplete: false
      });

      todoId++;
    },
    edit: (state, action) => {
      const {id, description} = action.payload;

      const todoToEdit = state.find(todo => todo.id === id);

      if (todoToEdit) {
        todoToEdit.description = description;
      }
    },
    toggleComplete: (state, action) => {
      const {payload} = action;

      const todoToToggle = state.find(todo => todo.id === payload);

      if (todoToToggle) {
        todoToToggle.isComplete = !todoToToggle.isComplete;
      }
    },
    remove: (state, action) => {
      const {payload} = action;

      const index = state.findIndex(todo => todo.id === payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const {create, edit, toggleComplete, remove} = slice.actions;

export default slice.reducer;
