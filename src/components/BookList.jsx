import { useSelector } from 'react-redux';

import AddBook from './AddBook';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <section id="booklist">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          progress={book.progress}
          chapter={book.chapter}
        />
      ))}
      <AddBook />
    </section>
  );
}

export default BookList;
