import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
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
