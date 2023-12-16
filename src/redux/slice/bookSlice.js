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
    const data = await fetchBooksApi(subject);
    return data.works;
  }
);

const fetchSearchApi = async (query) => {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&_spellcheck_count=0&limit=10&fields=key,cover_i,title,subtitle,author_name,name&mode=everything`
  );
  return response.json();
};

export const fetchSearchResults = createAsyncThunk(
  "books/fetchSerachResult",
  async ({ query }) => {
    const data = await fetchSearchApi(query);
    return data.docs;
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    bookList: [],
    searchResults: [],
    searchStatus: "idle",
    searchFetchError: null,
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
      })
      .addCase(fetchSearchResults.pending, (state) => {
        state.searchStatus = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        console.log({ payloadData: action.payload });
        state.searchStatus = "succeeded";
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.searchStatus = "failed";
        state.searchFetchError = action.error.message;
      });
  },
});

export default bookSlice.reducer;
