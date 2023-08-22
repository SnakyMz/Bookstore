import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/Books/booksSlice';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const formSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: Date.now(),
      title,
      author,
      category,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
    setCategory('');
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
          placeholder="Title"
          aria-label="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          value={author}
          aria-label="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          name="category"
          id="category"
          aria-label="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Nonfiction</option>
          <option value="romance">Romance</option>
          <option value="horror">Horror</option>
          <option value="biography">Biography</option>
          <option value="fantasy">Fantasy</option>
          <option value="comedy">Comedy</option>
          <option value="thriller">Thriller</option>
          <option value="drama">Drama</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AddBook;
