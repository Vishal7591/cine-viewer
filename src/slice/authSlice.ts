import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
import {Movie, RequestTokenResponse} from '../types/item/itemTypes';
import * as config from '../constants/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchRequestToken = createAsyncThunk(
  'auth/fetchRequestToken',
  async () => {
    const response = await fetch(
      `${config.MOVIES_API_URL}authentication/token/new`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${config.BEARER_TOKEN}`,
        },
      },
    );
    const responseJson: RequestTokenResponse = await response.json();
    await AsyncStorage.setItem(
      config.REQUEST_TOKEN_KEY,
      responseJson.request_token,
    );
    return responseJson.request_token;
  },
);

export type ThunkDispatch = typeof fetchRequestToken;

export const authSlice = createSlice({
  name: 'requestToken',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRequestToken.pending, state => {
      state.common.loading = true;
    });
    builder.addCase(fetchRequestToken.fulfilled, (state, action) => {
      state.common.loading = false;
      state.common.success = true;
      state.common.contents = action.payload as any;
    });
    builder.addCase(fetchRequestToken.rejected, (state, action) => {
      state.common.loading = false;
      state.common.error = action.error.message as string;
    });
  },
});

export default authSlice.reducer;
