import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLoginAttempt } from './login.interfaces';
import { api } from '../../../config/site.config';
import { AxiosError, AxiosResponse } from 'axios';

interface UserAuth {
  id: number;
  email: string;
  name: string;
  lastname: string;
}

interface LoginState {
  token: string | null;
  user: UserAuth | null;
}

const initialState: LoginState = {
  token: null,
  user: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<UserLoginAttempt>) {
      api
        .post('auth/login', action.payload)
        .then((response: AxiosResponse) => {
          state.user = response.data.user;
          state.token = response.data.token;
        })
        .catch((error: AxiosError) => console.log(error));
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
