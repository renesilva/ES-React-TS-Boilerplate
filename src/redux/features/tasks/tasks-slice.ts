import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { iTask } from '../../../components/Examples/TodoList/iTask';
import { storageGet, storageSave } from '../../../services/Storage/Storage';

interface TasksState {
  tasks: iTask[];
}

const initialState: TasksState = {
  tasks: storageGet('tasks', []),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask(state, action: PayloadAction<iTask>) {
      state.tasks.push(action.payload);
      storageSave('tasks', state.tasks);
    },
    removeTask(state, action: PayloadAction<number>) {
      state.tasks.splice(action.payload, 1);
      storageSave('tasks', state.tasks);
    },
    markTaskDone(state, action: PayloadAction<number>) {
      state.tasks[action.payload].done = !state.tasks[action.payload].done;
      storageSave('tasks', state.tasks);
    },
  },
});

export const { addTask, removeTask, markTaskDone } = tasksSlice.actions;
export default tasksSlice.reducer;
