import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditBook from './EditBook';

const DeleteBook = () => {
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const serverURL = `/book/${id}`; // Replace with server URL to fetch book details
        const res = await fetch(serverURL);
        if (!res.ok) {
          throw new Error('Failed to fetch book');
        }
        const data = await res.json();
        setTitle(data.title);
        setAuthor(data.author);
        setImageUrl(data.image);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      const serverURL = `/book/${id}`; // Replace with server URL to delete book
      const res = await fetch(serverURL, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!res.ok) {
        throw new Error('Failed to delete book');
      }
      console.log('Book deleted successfully');
      // Redirect to a different page after deletion
      history.push('/books'); // Replace '/books' with any redirect path
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };
};

export default DeleteBook;
