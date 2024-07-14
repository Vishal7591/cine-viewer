import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { Movie } from "../types/item/itemTypes";
import * as config from "../constants/config";

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async() => {
const response = await fetch(`${config.MOVIES_API_URL}movie/popular`,
{
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${config.BEARER_TOKEN}`
  }
});
const responseJson = await response.json();
  return responseJson.results;
});

export type ThunkDispatch = typeof fetchMovies;

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.common.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.common.loading = false;
      state.common.success = true;
      state.common.contents = action.payload as Array<Movie>;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.common.loading = false;
      state.common.error = action.error.message as string;
    });
  }
});

export default movieSlice.reducer;