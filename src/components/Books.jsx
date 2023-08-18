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
    <ul id="books">
      {books.map((book, index) => {
        return (
          <li key={index} id={book.id}>
            <div className="bookDesc">
              <h2>{book.name}</h2>
              <h3>{book.author}</h3>
              <div className="bookBtns">
                <button type="button" className="Btn">Comments</button>
                <span>|</span>
                <button type="button" className="Btn">Edit</button>
                <span>|</span>
                <button type="button" className="Btn">Delete</button>
              </div>
              <div className="bookProgress">
                <div className="percentage">
                  <h2>{book.progress}%</h2>
                  <h3>Completed</h3>
                </div>
              </div>
              <div className="bookChapter">
                <h3>Current Chapter</h3>
                <h2>{book.chapter}</h2>
                <button type="button" className="Btn">Update Progress</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Books;