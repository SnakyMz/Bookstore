import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/bookSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
