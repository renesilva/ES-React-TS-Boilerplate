import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import authReducer from '../features/auth/auth-slice';
import tasksReducer from '../features/tasks/tasks-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    tasks: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
