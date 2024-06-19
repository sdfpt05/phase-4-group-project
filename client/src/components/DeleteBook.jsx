import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();
  const history = useHistory();

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
  }, [id]); // Fetch book details when `id` changes

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
      // Redirect to a different page after deletion (optional)
      history.push('/books'); // Replace '/books' with your desired redirect path
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = { title, author, imageUrl };
    try {
      const serverURL = `/book/update/${id}`; // Replace with server URL to update book
      const res = await fetch(serverURL, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });
      if (!res.ok) {
        throw new Error('Failed to update book');
      }
      const data = await res.json();
      console.log('Book updated successfully:', data);
      setTitle(data.title);
      setAuthor(data.author);
      setImageUrl(data.image);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };