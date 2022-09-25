import { LoginPayload, LoginResponse } from '../../../services/Auth/Login.interfaces';
import { UserAuth } from '../../../services/Auth/User.interfaces';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authLogin } from '../../../services/Auth/Auth.service';

interface LoginState {
  token: string | null;
  user: UserAuth | null;
}

export const login = createAsyncThunk('auth/login', async (userLoginAttempt: LoginPayload) => {
  const response = await authLogin(userLoginAttempt);
  return response.data;
});

const initialState: LoginState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
