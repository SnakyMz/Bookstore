import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Mmy70lrcpxOYw0hyZQfR/books';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const responce = await axios(url);
    const data = await responce.data;
    return data;
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const responce = await axios.post(url, book);
    const data = await responce.data;
    return data;
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const responce = await axios.delete(`${url}/${id}`);
    const data = await responce.data;
    return data;
  } catch (error) {
    return error;
  }
});
