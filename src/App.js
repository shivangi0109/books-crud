import { useState } from 'react';
import BookCreate from './components/BookCreate';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add book with title:", title);
    const updatedBooks = [
      ...books,
      { id: 123, title }
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
