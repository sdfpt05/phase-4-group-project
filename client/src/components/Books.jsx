import React, { useEffect, useState } from 'react';
import BookCard from "./BookCard"
import './css/Book.css'

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const serverURL = ''; // Replace with server URL
        const res = await fetch(serverURL);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setBooks(data.books);
        console.log(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks(); 
  }, []);

  return (
    <div className='book-list'>
      {
        books.map(book => (
          <BookCard key={book.id} book = {book}></BookCard>
        ))
    }
    </div>
  );
};

export default Books;
