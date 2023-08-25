import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../api/bookstoreApi';

function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const formSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: Date.now(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };
  return (
    <section id="addBook">
      <h2 className="newHead">ADD NEW BOOK</h2>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          placeholder="Book Title"
          aria-label="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Book Author"
          value={author}
          aria-label="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" id="submitBtn">ADD BOOK</button>
      </form>
    </section>
  );
}

export default AddBook;
