import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow({ book, onDelete }) {
  const [editShow, setEditShow] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id)
  };

  const handleEditClick = () => {
    setEditShow(!editShow);
  }

  return (
    <div className="book-show">
      {
        editShow 
          ? 
          <div>
            <BookEdit book={book} />
          </div> 
          : 
          <div>
            <h3>{book.title}</h3>
          </div>
      }
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>X</button>
        <button className="delete" onClick={handleDeleteClick}>X</button>
      </div>
    </div>
  );
}

export default BookShow;
