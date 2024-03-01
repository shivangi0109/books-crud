import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    console.log("Need to add book with title:", title);
    const updatedBooks = [
      ...books,
      {
        id: Math.floor(Math.random() * 9999 + 1),
        title
      }
    ];
    setBooks(updatedBooks);
  };

  const EditBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={EditBookById} />
    </div>
  );
}

export default App;
