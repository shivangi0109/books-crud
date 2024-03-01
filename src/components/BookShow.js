import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
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
            <BookEdit book={book} onEdit={onEdit} />
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
