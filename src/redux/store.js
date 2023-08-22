import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/booksSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
