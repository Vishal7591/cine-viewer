import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
import {LoginParmas} from '../types/item/itemTypes';
import * as config from '../constants/config';

export const validateLogin = createAsyncThunk(
  'auth/validateLogin',
  async (loginParams: LoginParmas) => {
    const response = await fetch(
      `${config.MOVIES_API_URL}authentication/token/validate_with_login`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${config.BEARER_TOKEN}`,
        },
        body: JSON.stringify(loginParams),
      },
    );
    const responseJson: any = await response.json();
    return responseJson;
  },
);

export type ThunkDispatch = typeof validateLogin;

export const loginSlice = createSlice({
  name: 'validateLogin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(validateLogin.pending, state => {
      state.common.loading = true;
    });
    builder.addCase(validateLogin.fulfilled, (state, action) => {
      state.common.loading = false;
      state.common.success = true;
      state.common.contents = action.payload as any;
    });
    builder.addCase(validateLogin.rejected, (state, action) => {
      state.common.loading = false;
      state.common.error = action.error.message as string;
    });
  },
});

export default loginSlice.reducer;
