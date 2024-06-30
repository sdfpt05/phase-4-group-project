import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { serverURL } from '../utils';

const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(serverURL + '/book/' +id);
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
      const url = `${serverURL}/book/${id}`; // Replace with server URL to update book
      const res = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
      });
      if (!res.ok) {
        throw new Error('Failed to update book');
      }
      const data = await res.json();
      console.log('Book updated successfully:', data);
      navigate('/books')
    } catch (error) {
      console.error('Error updating book:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { title, author, image_url:imageUrl, description:'changes' };
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
        <button type='button' onClick={handleSubmit}>Update</button>
      </form>
    </div>
  );
};

export default EditBook;
