import AddBook from "./AddBook";

function Books() {
  const books = [
    {
      id: 1,
      name: "The Hunger Games",
      author: "Suzanne Collins",
      progress: 64,
      chapter: "Chapter 17"
    },
    {
      id: 2,
      name: "Dune",
      author: "Frank Herbert",
      progress: 8,
      chapter: "Chapter 3: A Lesson Learned"
    },
    {
      id: 3,
      name: "Capital in the Twenty-First Century",
      author: "Suzanne Collins",
      progress: 0,
      chapter: "Introduction"
    },
  ];
  return (
    <section id="library">
      <ul id="books">
        {books.map((book, index) => {
          return (
            <li key={index} id={book.id}>
              <div className="bookDesc">
                <h3>{book.name}</h3>
                <h4>{book.author}</h4>
                <div className="bookBtns">
                  <button type="button" className="Btn">Comments</button>
                  <span>|</span>
                  <button type="button" className="Btn">Edit</button>
                  <span>|</span>
                  <button type="button" className="Btn">Delete</button>
                </div>
                <div className="bookProgress">
                  <div className="percentage">
                    <h3>{book.progress}%</h3>
                    <h4>Completed</h4>
                  </div>
                </div>
                <div className="bookChapter">
                  <h4>Current Chapter</h4>
                  <h3>{book.chapter}</h3>
                  <button type="button" className="Btn">Update Progress</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <AddBook />
    </section>
  );
}

export default Books;