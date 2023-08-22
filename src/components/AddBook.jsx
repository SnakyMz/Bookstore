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
          <option value="">--Category--</option>
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
          <option value="Romance">Romance</option>
          <option value="Horror">Horror</option>
          <option value="Biography">Biography</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          <option value="Drama">Drama</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AddBook;
