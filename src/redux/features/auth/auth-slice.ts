import { LoginPayload, LoginResponse } from '../../../services/Auth/Login.interfaces';
import { UserAuth } from '../../../services/Auth/User.interfaces';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authLogin } from '../../../services/Auth/Auth.service';
import { storageDelete, storageGet, storageSave } from '../../../services/Storage/Storage';

interface LoginState {
  token: string | null;
  user: UserAuth | null;
}

export const loginRequest = createAsyncThunk(
  'auth/loginRequest',
  async (userLoginAttempt: LoginPayload) => {
    const response = await authLogin(userLoginAttempt);
    return response.data;
  },
);

const initialState: LoginState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    checkAuthorization(state) {
      const token = storageGet('token');
      const user = storageGet('user');
      if (token && user) {
        state.user = user;
        state.token = token;
      }
    },
    logout(state) {
      state.user = null;
      state.token = null;
      storageDelete('user');
      storageDelete('token');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
      if (action.payload.user && action.payload.token) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        storageSave('user', action.payload.user);
        storageSave('token', action.payload.token);
      }
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
