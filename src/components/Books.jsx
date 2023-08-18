import AddBook from './AddBook';
import Book from './Book';

function Books() {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: 64,
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      progress: 8,
      chapter: 'Chapter 3: A Lesson Learned',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      progress: 0,
      chapter: 'Introduction',
    },
  ];
  return (
    <section id="library">
      <ul id="books">
        {books.map((book) => (
          <li key={book.id}>
            <Book
              title={book.title}
              author={book.author}
              progress={book.progress}
              chapter={book.chapter}
            />
          </li>
        ))}
      </ul>
      <AddBook />
    </section>
  );
}

export default Books;
