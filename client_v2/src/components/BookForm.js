// src/components/BookForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const BookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image_url: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      if (id) {
        const response = await api.get(`/book/${id}`);
        setFormData(response.data);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/book/${id}`, formData);
      } else {
        await api.post('/addbook', formData);
      }
      navigate('/books');
    } catch (err) {
      setError(err.response.data.errors);
    }
  };

  return (
    <div className="container">
      <h1>{id ? 'Edit' : 'Add'} Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Author</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Image URL</label>
          <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} />
        </div>
        <button type="submit">{id ? 'Update' : 'Add'} Book</button>
      </form>
      {error && (
        <div className="error">
          {Object.keys(error).map((key) => (
            <div key={key}>{error[key]}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookForm;






