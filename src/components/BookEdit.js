import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New title:", title);
    onSubmit();
    editBookById(book.id, title);
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input className="input" type="text" name="title" value={title} onChange={handleChange} />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
