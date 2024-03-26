import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input className="input" type="text" name="title" value={title} onChange={handleChange} />
        <button className="button ">Create book!</button>
      </form>
    </div>
  );
}

export default BookCreate;
