import { createSlice } from '@reduxjs/toolkit';
import { addBook, getBooks, removeBook } from '../../api/bookstoreApi';

function Slice(key, [element]) {
  return {
    id: key,
    title: element.title,
    author: element.author,
    category: element.category,
  };
}

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    length: 0,
    isLoading: false,
    hasError: false,
    errorMessage: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: '',
      }))
      .addCase(getBooks.fulfilled, (state, action) => {
        const itemKeys = Object.keys(action.payload);
        const books = itemKeys.map((key) => Slice(key, action.payload[key]));

        return {
          ...state,
          books,
          length: books.length,
          isLoading: false,
          hasError: false,
          errorMessage: '',
        };
      })
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload,
      }))
      .addCase(removeBook.pending, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: '',
      }))
      .addCase(removeBook.fulfilled, (state) => ({
        ...state,
        length: state.length - 1,
        isLoading: false,
        hasError: false,
        errorMessage: '',
      }))
      .addCase(removeBook.rejected, (state, action) => ({
        ...state,
        hasError: true,
        errorMessage: action.payload,
      }))
      .addCase(addBook.pending, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: '',
      }))
      .addCase(addBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
        length: state.length + 1,
        hasError: false,
      }))
      .addCase(addBook.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.error.message,
      }));
  },
});

export default bookSlice.reducer;
