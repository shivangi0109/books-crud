import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

function BookShow({ book }) {
  const [editShow, setEditShow] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id)
  };

  const handleEditClick = () => {
    setEditShow(!editShow);
  }

  const handleSubmit = () => {
    setEditShow(false);
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/200/300`} />
      {
        editShow 
          ? 
          <div>
            <BookEdit book={book} onSubmit={handleSubmit} />
          </div> 
          : 
          <div>
            <h3>{book.title}</h3>
          </div>
      }
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default BookShow;
