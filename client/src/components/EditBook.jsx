import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditBook = () => {
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
  }, [id]); // Fetch book details when `id` changes

  async function onSubmit(values) {
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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { title, author, imageUrl };
    onSubmit(values);
  };

  return (
    <div className='client-form-container'>
      <form className='client-form' onSubmit={handleSubmit}>
        <h2>Edit Book</h2>
        <div className='form-group'>
          <label htmlFor='book'>Book Title:</label>
          <input
            type='text'
            id='book'
            name='book'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='author'>Author Name:</label>
          <input
            type='text'
            id='author'
            name='author'
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='image'>Image URL:</label>
          <input
            type='text'
            id='image'
            name='image'
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
          />
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  );
};

export default EditBook;
