// src/components/ClientForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ClientForm = () => {
  const [formData, setFormData] = useState({
    roll: '',
    username: '',
    mobile: '',
    email: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/addclient', formData);
      navigate('/');
    } catch (err) {
      setError(err.response.data.errors);
    }
  };

  return (
    <div className="container">
      <h1>Add Client</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Roll</label>
          <input type="text" name="roll" value={formData.roll} onChange={handleChange} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label>Mobile</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Add Client</button>
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

export default ClientForm;



