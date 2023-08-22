import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/Books/booksSlice';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const formSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: Date.now(),
      title,
      author,
      progress: 64,
      chapter: 'Chapter 1',
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };
  return (
    <section id="addBook">
      <h2>Add new book</h2>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder=" Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder=" Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AddBook;
