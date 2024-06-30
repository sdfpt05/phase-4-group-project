// import { useEffect, useState } from 'react';
import BookCard from "./BookCard"
import './css/Book.css'
import { useBooks } from '../use-books';

const Books = () => {
  // const [books, setBooks] = useState([]);
  const { books } = useBooks()
  console.log(books)

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const serverURL = 'https://phase-4-group-project.onrender.com/books'
  //       const res = await fetch(serverURL);
  //       if (!res.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const data = await res.json();
  //       setBooks(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching books:', error);
  //     }
  //   };

  //   fetchBooks(); 
  // }, []);

  return (
    <div className='book-list'>
      {
        books?.map(book => (
          <BookCard key={book.id} book = {book}></BookCard>
        ))
    }
    </div>
  );
};

export default Books;
