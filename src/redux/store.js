import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/books';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
