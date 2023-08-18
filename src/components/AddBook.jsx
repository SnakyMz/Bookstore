function AddBook() {
  return (
    <section id="addBook">
      <h2>Add new book</h2>
      <form>
        <input type="text" id="title" placeholder="Book title" />
        <input type="text" id="author" placeholder="Book author" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AddBook;
