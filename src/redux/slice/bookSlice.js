/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchBooksApi = async (subject) => {
  const response = await fetch(
    `https://openlibrary.org/subjects/${subject}.json`
  );
  return response.json();
};

export const fetchBooks = createAsyncThunk(
  "movie/fetchBooks",
  async ({ subject }) => {
    console.log({ subject });
    const data = await fetchBooksApi(subject);
    return data.works;
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    bookList: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
