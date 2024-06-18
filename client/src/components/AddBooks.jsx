import React, { useState } from 'react';

const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  async function onSubmit(values) {
    try {
      const serverURL = ''; // Replace with your server URL
      const res = await fetch(serverURL, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json();
      console.log('Book added successfully:', data);
      setName('');
      setAuthor('');
      setImageUrl('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { name, author, imageUrl };
    onSubmit(values);
  };

  return (
    <div className='client-form-container'>
      <form className='client-form' onSubmit={handleSubmit}>
        <h2>Add Book</h2>
        <div className='form-group'>
          <label htmlFor='book'>Book Name:</label>
          <input
            type='text'
            id='book'
            name='book'
            onChange={(e) => setName(e.target.value)}
            value={name}
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
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddBook;
