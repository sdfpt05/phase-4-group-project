// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await api.get('/books');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h1>Book List</h1>
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;





