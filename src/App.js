import { useState } from 'react';
import BookCreate from './components/BookCreate';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

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

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
