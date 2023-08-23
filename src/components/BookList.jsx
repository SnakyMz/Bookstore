import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../api/bookstoreApi';
import AddBook from './AddBook';
import Book from './Book';

function BookList() {
  const {
    books, length, isLoading, hasError, errorMessage,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, length]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (hasError) {
    return (
      <div className="errorMsg">
        Something went wrong!
        <br />
        {errorMessage}
      </div>
    );
  }

  return (
    <section id="booklist">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <AddBook />
    </section>
  );
}

export default BookList;
