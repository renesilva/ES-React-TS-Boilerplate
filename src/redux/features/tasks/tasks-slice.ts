import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iTask } from '../../../components/Examples/TodoList/iTask';

interface TasksState {
  tasks: iTask[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask(state, action: PayloadAction<iTask>) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks.splice(action.payload, 1);
    },
    markTaskDone(state, action: PayloadAction<number>) {
      state.tasks[action.payload].done = !state.tasks[action.payload].done;
    },
  },
});

export const { addTask, removeTask, markTaskDone } = tasksSlice.actions;
export default tasksSlice.reducer;
