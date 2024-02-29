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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <button>Create book!</button>
        </form>
    </div>
  );
}

export default BookCreate;
